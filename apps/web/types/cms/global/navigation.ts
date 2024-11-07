import { CmsPage, GlobalItemTypeName } from '../base'

export interface NavigationType {
	_type: GlobalItemTypeName.NAVIGATION
	navigation_links: CmsPage[]
}
