import { Homepage } from './pages/homepage'

export enum PageTypeName {
	HOMEPAGE = 'homepage',
	PRODUCT = 'product',
	PAGE = 'page',
}

export type Slug = {
	current: string
	_type: 'slug'
}

export interface PageBase {
	page_title?: string
	name: string
	_id: string
	slug: Slug
}

export type CmsPage = Homepage
