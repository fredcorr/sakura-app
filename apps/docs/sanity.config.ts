import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['site_settings, homepage'])

if (!process.env.SANITY_STUDIO_PROJECT_ID) {
  throw new Error('CMS environment variables not set: SANITY_PROJECT_ID')
}

if (!process.env.SANITY_STUDIO_DATA_SET) {
  throw new Error('CMS environment variables not set: SANITY_PROJECT_ID')
}

export default defineConfig({
  name: 'default',
  title: 'Sakura Living',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATA_SET,
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
  plugins: [
    visionTool(),
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title('Site settings').id('site_settings').child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType('site_settings').documentId('site_settings'),
            ),
            S.divider(),
            S.listItem()
              .schemaType('page')
              .title('Pages')
              .child(S.documentTypeList('page').title('All Pages').filter('_type == "page"')),
            S.listItem().title('Homepage').id('homepage').child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType('homepage').documentId('homepage'),
            ),
          ]),
    }),
  ],
})
