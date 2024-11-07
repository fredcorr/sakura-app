import RenderContainer from '_hoc/RenderContainer/RenderContainer'
import { getAllPages, getSinglePage } from '_lib/sanity'
import { RouteParams } from '_types/local/routing'
import { notFound } from 'next/navigation'

export const revalidate = 60

export default async function Page({ params: { slug } }: RouteParams) {
	const route = await getSinglePage(slug)

	if (!route) return notFound()

	return <RenderContainer page={route} />
}

export async function generateStaticParams() {
	return await getAllPages()
}

export async function generateMetadata({ params: { slug } }: RouteParams) {
	const route = await getSinglePage(slug)

	return {
		title: route.page_title,
	}
}
