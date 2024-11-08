import pageBase from '../../nodes/compositions/page-base'
import pageSeo from '../../nodes/compositions/page-seo'
import pageBaseFieldSets from '../fieldsets/page-base'
import seoSettings from '../fieldsets/seo-settings'

export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fieldsets: [{...seoSettings}, {...pageBaseFieldSets}],
  fields: [
    ...pageBase,
    {
      title: 'Content',
      name: 'page_components',
      type: 'page_components',
    },
    ...pageSeo,
  ],
}
