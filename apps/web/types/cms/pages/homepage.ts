import { Components, PageBase, PageTypeName } from '../base'

export interface Homepage extends PageBase {
	_type: PageTypeName.HOMEPAGE
	page_components: Components[]
}
