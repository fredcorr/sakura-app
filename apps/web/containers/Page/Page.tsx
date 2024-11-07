import { Page as PageType } from '_types/cms/pages/page'
import React from 'react'

export const Page = ({ page_title }: PageType) => {
	return (
		<>
			<h1>{page_title}</h1>
			<p>This is a paragraph test</p>
		</>
	)
}
