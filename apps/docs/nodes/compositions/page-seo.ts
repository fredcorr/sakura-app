export default [
  {
    name: 'seo_title',
    title: 'Seo',
    type: 'string',
    fieldset: 'page_seo',
  },
  {
    name: 'seo_description',
    title: 'Seo description',
    type: 'string',
    fieldset: 'page_seo',
  },
  {
    name: 'seo_keywords',
    title: 'Seo keywords',
    fieldset: 'page_seo',
    type: 'array',
    of: [
      {
        type: 'string',
      },
    ],
  },
]
