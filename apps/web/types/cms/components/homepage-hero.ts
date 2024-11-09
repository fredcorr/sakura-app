import { ComponentsTypeName, Image } from '../base'

export interface HomepageHero {
	_type: ComponentsTypeName.HOMEPAGE_HERO
	homepage_hero_slides?: HomepageHeroSlide[]
}

export interface HomepageHeroSlide {
	slide_description?: string
	slide_link_label?: string
	slide_title?: string
	slide_image?: Image
}
