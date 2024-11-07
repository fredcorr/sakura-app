import pageBase from '../../nodes/compositions/page-base'
import pageBaseFieldSets from '../fieldsets/page-base'
import pageSeo from '../../nodes/compositions/page-seo'
import seoSettings from '../fieldsets/seo-settings'

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fieldsets: [{...seoSettings}, {...pageBaseFieldSets}],
  fields: [...pageBase, ...pageSeo],
}
