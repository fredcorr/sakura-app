import RenderContainer from '_hoc/RenderContainer/RenderContainer'
import { getAllPages, getSinglePage } from '_lib/sanity'
import { RouteParams } from '_types/local/routing'

export default async function Page({ params: { slug } }: RouteParams) {
	const route = await getSinglePage(slug)

	return <RenderContainer page={route} />
}

export async function generateStaticParams() {
	return await getAllPages()
}
