import { Homepage } from 'containers/Homepage/Homepage'
import { CmsPage, PageTypeName } from '_types/cms/base'
import { Product } from 'containers/Product/Product'
import { Page } from 'containers/Page/Page'

export interface RenderContainerProps {
	page: CmsPage
}

const renderContainer = ({ page }: RenderContainerProps) => {
	const data = { ...page }

	switch (data._type) {
		case PageTypeName.HOMEPAGE:
			return <Homepage {...data} />
		case PageTypeName.PAGE:
			return <Page {...data} />
		case PageTypeName.PRODUCT:
			return <Product {...data} />
		default:
			return null
	}
}

export default renderContainer
