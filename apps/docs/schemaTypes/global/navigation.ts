import {Rule} from '@sanity/types'

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Navigation',
        subtitle: 'All navigation links',
      }
    },
  },
  fields: [
    {
      name: 'navigation_links',
      title: 'Links',
      type: 'array',
      validation: (Rule: Rule) => Rule.max(4),
      of: [{type: 'reference', to: [{type: 'page'}, {type: 'product'}]}],
    },
  ],
}
