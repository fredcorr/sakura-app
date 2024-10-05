import { PageTypeName } from '_types/cms/base'

const allPagesTypes = Object.values(PageTypeName).map(type => `"${type}"`)

export const allPages = `*[_type in [${allPagesTypes}]]{
  slug
}`
