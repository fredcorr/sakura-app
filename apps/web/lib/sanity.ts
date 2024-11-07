import { createClient } from '@sanity/client'
import { CmsPage } from '_types/cms/base'
import { GetAllPages, GetSinglePage } from '_types/local/sanity'
import { allPages } from '_groq/functions/all-pages'
import { getPageQuery } from '_groq/functions/get-page-query'
import { navigation } from '_groq/global/navigation'

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
})

export const getSinglePage: GetSinglePage = async (slug, preview) => {
	const parsedSlug = !!slug?.length ? slug.join('/') : '/'

	const data = await client.fetch<CmsPage>(
		'*[slug.current == $slug]{_type, _id}[0]',
		{
			slug: parsedSlug,
		},
	)

	if (!data) return false

	const page = await client.fetch(
		`*[_id == $id && _type == $type]{ ${getPageQuery(data._type)}}[0]`,
		{
			type: data._type,
			id: data._id,
		},
	)

	return page
}

export const getAllPages: GetAllPages = async () => {
	const posts = await client.fetch<CmsPage[]>(allPages)

	return posts.map(page => page.slug.current)
}

export const getNavigation = async () => {
	const nav = await client.fetch(navigation)

	return {}
}
