import { GlobalItemTypeName, Image } from '../base'

export interface SiteSettingsType {
	_type: GlobalItemTypeName.SITE_SETTINGS
	copyright_text: string
	site_name: string
	brand_logo: Image
}
