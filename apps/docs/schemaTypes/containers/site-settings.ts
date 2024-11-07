export default {
  name: 'site_settings',
  title: 'Site settings',
  type: 'document',
  fields: [
    {
      name: 'site_name',
      title: 'Site name',
      type: 'string',
    },
    {
      name: 'brand_logo',
      title: 'Brand Logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        },
      ],
    },
    {
      name: 'copyright_text',
      title: 'Copyright',
      type: 'string',
    },
  ],
}
