import {PageTypeName} from '../../../types/pages'
import {FcPanorama, FcFrame} from 'react-icons/fc'
import Reference from '../atoms/reference'
import String from '../atoms/string'
import Media from '../atoms/media'
import {Rule} from '@sanity/types'
import {preview} from '../../../utils/preview'

export default {
  title: 'Homepage Hero',
  name: 'homepage_hero',
  type: 'object',
  preview: preview({
    prepare: () => ({title: 'Homepage Hero', media: <FcPanorama />}),
  }),
  fields: [
    {
      title: 'Slides',
      name: 'homepage_hero_slides',
      type: 'array',
      validation: (Rule: Rule) => Rule.max(3),
      of: [
        {
          title: 'Slide',
          name: 'homepage_hero_slide',
          type: 'object',
          preview: preview({
            select: {title: 'slide_title', media: 'slide_image', subtitle: 'slide_description'},
            prepare: (values) => ({
              title: values.title || 'Slide',
              media: values.media || <FcFrame />,
              ...values,
            }),
          }),
          fields: [
            Media({
              name: 'slide_image',
              title: 'Slide image',
              options: {
                collapsible: true,
                collapsed: true,
                modal: {type: 'popover'},
              },
            }),
            String({name: 'slide_title', title: 'Slide title'}),
            String({name: 'slide_description', title: 'Slide description'}),
            Reference({
              name: 'slide_link',
              title: 'Slide Link',
              refs: [{type: PageTypeName.PAGE}, {type: PageTypeName.PRODUCT}],
            }),
            String({name: 'slide_link_label', title: 'Slide Link Label'}),
          ],
        },
      ],
    },
  ],
}
