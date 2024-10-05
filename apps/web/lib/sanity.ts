import { createClient } from '@sanity/client'
import { CmsPage } from '_types/cms/base'
import { GetAllPages, GetSinglePage } from '_types/local/sanity'
import { allPages } from 'groq/functions/all-pages'
import { getPageQuery } from 'groq/functions/get-page-query'

if (!process.env.SANITY_STUDIO_PROJECT_ID) {
	throw new Error('CMS environment variables not set: SANITY_PROJECT_ID')
}

if (!process.env.SANITY_STUDIO_DATA_SET) {
	throw new Error('CMS environment variables not set: SANITY_PROJECT_ID')
}

if (!process.env.SANITY_STUDIO_TOKEN) {
	throw new Error('CMS environment variables not set: SANITY_STUDIO_TOKEN')
}

export const client = createClient({
	projectId: process.env.SANITY_STUDIO_PROJECT_ID,
	dataset: process.env.SANITY_STUDIO_DATA_SET,
	token: process.env.SANITY_STUDIO_TOKEN,
	perspective: 'published',
	useCdn: true, // set to `false` to bypass the edge cache
	apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
	// token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

export const getSinglePage: GetSinglePage = async (slug, preview) => {
	const parsedSlug = !!slug?.length ? slug.join('/') : '/'
	const { _type, _id } = await client.fetch<CmsPage>(
		'*[slug.current == $slug]{_type, _id}[0]',
		{
			slug: parsedSlug,
		},
	)

	const page = await client.fetch<CmsPage>(
		`*[_id == $id && _type == $type]{ ${getPageQuery(_type)}}[0]`,
		{
			type: _type,
			id: _id,
		},
	)

	return page
}

export const getAllPages: GetAllPages = async () => {
	const posts = await client.fetch<CmsPage[]>(allPages)

	return posts.map(page => page.slug.current)
}
