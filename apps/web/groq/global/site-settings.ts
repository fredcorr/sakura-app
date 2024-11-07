import { Image } from '_groq/shared/base'

export const SiteSettingsQuery = `
  site_name,
  copyright_text,
  "brand_logo": brand_logo.asset->{
    ${Image}
  }
`
