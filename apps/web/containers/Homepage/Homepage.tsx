import { Homepage as HomepageType } from '_types/cms/pages/homepage'
import React from 'react'

export const Homepage = ({ page_title }: HomepageType) => {
	return (
		<>
			<h1>{page_title}</h1>
			<p>This is a paragraph test</p>
		</>
	)
}
