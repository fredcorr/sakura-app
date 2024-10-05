import { Homepage } from 'containers/Homepage/Homepage'
import { CmsPage, PageTypeName } from '_types/cms/base'

export interface RenderContainerProps {
	page: CmsPage
}

const renderContainer = ({ page }: RenderContainerProps) => {
	const data = { ...page }

	switch (data._type) {
		case PageTypeName.HOMEPAGE:
			return <Homepage {...data} />
		default:
			return null
	}
}

export default renderContainer
