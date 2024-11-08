import { Components, ComponentsTypeName, PageTypeName } from '_types/cms/base'
import HomepageHero from '_organisms/HomepageHero/HomepageHero'

export interface RenderContainerProps {
	component: Components
}

const renderComponent = ({ component }: RenderContainerProps) => {
	switch (component._type) {
		case ComponentsTypeName.HOMEPAGE_HERO:
			return <HomepageHero />
		default:
			return null
	}
}

export default renderComponent
