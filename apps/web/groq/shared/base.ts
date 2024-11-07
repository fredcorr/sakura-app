export const PageBase = `
  page_title,
  _type,
  name,
  slug,
  _id,
`

export const Image = `
  _id,
  _type,
  url,
  metadata{
    lqip,
    dimensions{
      width,
      height,
    },
  },
  alt,
`

export const Link = `
  page_title,
	name,
	_id,
	slug {
    current
  }
`
