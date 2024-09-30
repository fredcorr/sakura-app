import { RouteParams } from '_types/local/routing'

export default function Page({ params: { slug } }: RouteParams) {
	return (
		<main>
			<h1>Hello World</h1>
		</main>
	)
}
