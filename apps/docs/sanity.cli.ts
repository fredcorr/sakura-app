import {defineCliConfig} from 'sanity/cli'

if (!process.env.SANITY_STUDIO_PROJECT_ID) {
  throw new Error('CMS environment variables not set: SANITY_PROJECT_ID')
}

if (!process.env.SANITY_STUDIO_DATA_SET) {
  throw new Error('CMS environment variables not set: SANITY_PROJECT_ID')
}

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATA_SET,
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
  studioHost: 'sakura-app',
})
