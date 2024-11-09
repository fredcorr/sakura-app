import { ComponentsTypeName } from '_types/cms/base'
import { Image } from '_groq/shared/base'

export const HomepageHero = `
  _type == "${ComponentsTypeName.HOMEPAGE_HERO}" => {
    homepage_hero_slides[] {
      slide_description,
      slide_link_label,
      slide_title,
      "slide_image": slide_image.asset->{
      ${Image}
      }
    }
  }
`
