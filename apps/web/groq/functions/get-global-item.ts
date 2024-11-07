import { GlobalItemTypeName } from '_types/cms/base'
import { NavigationQuery } from '_groq/global/navigation'
import { SiteSettingsQuery } from '_groq/global/site-settings'

export const getGlobalItemQuery = (type: GlobalItemTypeName) => {
	switch (type) {
		case GlobalItemTypeName.NAVIGATION:
			return NavigationQuery
		case GlobalItemTypeName.SITE_SETTINGS:
			return SiteSettingsQuery

		default:
			throw new Error(`No global item fragment defined for ${type}`)
	}
}
