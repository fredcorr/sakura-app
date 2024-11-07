import { Link } from '_groq/shared/base'

export const NavigationQuery = `
  navigation_links[]-> {
    ${Link}
  }
`
