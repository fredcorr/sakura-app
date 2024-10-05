import { PageTypeName } from '_types/cms/base'
import { HomepageQuery } from '_groq/pages/homepage'

export const getPageQuery = (type: PageTypeName) => {
	switch (type) {
		case PageTypeName.HOMEPAGE:
			return HomepageQuery

		default:
			throw new Error(`No page fragment defined for ${type}`)
	}
}
