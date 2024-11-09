import { Homepage as HomepageType } from '_types/cms/pages/homepage'
import renderComponent from '_hoc/RenderComponent/RenderComponent'

export const Homepage = ({ page_components }: HomepageType) => {
	return page_components.modules.map(comp =>
		renderComponent({ component: comp }),
	)
}
