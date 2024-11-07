export default [
  {
    name: 'name',
    title: 'Name',
    type: 'string',
    fieldset: 'page_base',
  },
  {
    name: 'page_title',
    title: 'Page title',
    type: 'string',
    fieldset: 'page_base',
  },
  {
    title: 'Slug',
    name: 'slug',
    type: 'slug',
    fieldset: 'page_base',
    options: {
      source: 'name',
      maxLength: 200, // will be ignored if slugify is set
      slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
    },
  },
]
