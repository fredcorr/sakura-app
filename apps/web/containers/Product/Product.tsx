import { Product as ProductType } from '_types/cms/pages/product'
import React from 'react'

export const Product = ({ page_title }: ProductType) => {
	return (
		<>
			<h1>{page_title}</h1>
			<p>This is a paragraph test</p>
		</>
	)
}
