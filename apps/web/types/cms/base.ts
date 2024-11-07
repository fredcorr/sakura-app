import { NavigationType } from './global/navigation'
import { SiteSettingsType } from './global/site-settings'
import { Homepage } from './pages/homepage'
import { Page } from './pages/page'
import { Product } from './pages/product'

export enum PageTypeName {
	HOMEPAGE = 'homepage',
	PRODUCT = 'product',
	PAGE = 'page',
}

export enum GlobalItemTypeName {
	NAVIGATION = 'navigation',
	SITE_SETTINGS = 'site_settings',
}

export type Slug = {
	current: string
	_type: 'slug'
}

export interface Image {
	_id: string
	url: string
	metadata: {
		lqip: string
		dimensions: {
			width: number | `${number}`
			height: number | `${number}`
		}
	}
	alt: string | null
}

export interface PageBase {
	page_title?: string
	name: string
	_id: string
	slug: Slug
}

export type CmsPage = Homepage | Product | Page
export type GlobalItem = NavigationType | SiteSettingsType
