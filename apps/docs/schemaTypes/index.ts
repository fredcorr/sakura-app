// CONTAINERS
import siteSettings from './containers/site-settings'
import homepage from './containers/homepage'
import product from './containers/prodcuts'
import page from './containers/page'

// COMPONENTS
import homepageHero from '../nodes/components/organisms/homepage-hero'

// HOC
import components from '../nodes/hoc/page-components'

// GLOBAL
import navigation from './global/navigation'

export const schemaTypes = [
  siteSettings,
  homepageHero,
  navigation,
  components,
  homepage,
  product,
  page,
]
