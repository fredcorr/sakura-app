import { PageBase } from '_groq/shared/base'
import Components from '_groq/components'

export const HomepageQuery = `
  ${PageBase}
  page_components {
    modules[] {
      _type,
      ${Components.join(',')}
    }
  }
`
