import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {pageTreeConfig} from './page-tree-config'
import {createPageTreeDocumentList} from '@q42/sanity-plugin-page-tree'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['settings'])

export default defineConfig({
  name: 'default',
  title: 'Sakura Living',

  projectId: 'js8q83qh',
  dataset: 'production',
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
            S.listItem()
              .title('Pages')
              .child(
                createPageTreeDocumentList(S, {
                  config: pageTreeConfig,
                  extendDocumentList: (builder) =>
                    builder.id('pages').title('Pages').apiVersion(pageTreeConfig.apiVersion),
                }),
              ),
            // Our singleton type has a list item with a custom child
            S.listItem().title('Site settings').id('site_settings').child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType('site_settings').documentId('site_settings'),
            ),
          ]),
    }),
    visionTool(),
  ],
})
