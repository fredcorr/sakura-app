import {FcTreeStructure, FcEngineering, FcHome, FcDeployment, FcCircuit} from 'react-icons/fc'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Base')
    .items([
      // Our singleton type has a list item with a custom child
      S.listItem().title('Site settings').icon(FcEngineering).id('site_settings').child(
        // Instead of rendering a list of documents, we render a single
        // document, specifying the `documentId` manually to ensure
        // that we're editing the single instance of the document
        S.document().schemaType('site_settings').documentId('site_settings'),
      ),
      S.listItem().title('Navigation').id('navigation').icon(FcTreeStructure).child(
        S.document()
          .schemaType('navigation')
          // .views([S.view.form(), documentViewWithNoDelete(S)])
          .documentId('navigation'),
      ),
      S.divider(),
      S.listItem().title('Homepage').id('homepage').icon(FcHome).child(
        // Instead of rendering a list of documents, we render a single
        // document, specifying the `documentId` manually to ensure
        // that we're editing the single instance of the document
        S.document().schemaType('homepage').documentId('homepage'),
      ),
      S.listItem()
        .schemaType('page')
        .icon(FcCircuit)
        .title('Pages')
        .child(S.documentTypeList('page').title('All Pages').filter('_type == "page"')),
      S.listItem()
        .schemaType('product')
        .icon(FcDeployment)
        .title('Products')
        .child(S.documentTypeList('product').title('All Products').filter('_type == "product"')),
    ])
