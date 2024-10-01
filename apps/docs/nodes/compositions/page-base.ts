export default [
  {
    name: 'name',
    title: 'Name',
    type: 'string',
  },
  {
    name: 'page_title',
    title: 'Page title',
    type: 'string',
  },
  {
    title: 'Slug',
    name: 'slug',
    type: 'slug',
    options: {
      source: 'title',
      maxLength: 200, // will be ignored if slugify is set
      slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
    },
  },
]
