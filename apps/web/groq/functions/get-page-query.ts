import { HomepageQuery } from '_groq/pages/homepage'
import { ProductQuery } from '_groq/pages/product'
import { PageTypeName } from '_types/cms/base'
import { PageQuery } from '_groq/pages/page'

export const getPageQuery = (type: PageTypeName) => {
	switch (type) {
		case PageTypeName.HOMEPAGE:
			return HomepageQuery
		case PageTypeName.PAGE:
			return PageQuery
		case PageTypeName.PRODUCT:
			return ProductQuery

		default:
			throw new Error(`No page fragment defined for ${type}`)
	}
}
