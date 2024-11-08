import {BaseFields} from '../../../types/base'

const Media = (base: BaseFields) => {
  return {
    ...base,
    type: 'image',
    fields: [
      {
        name: 'alt',
        type: 'string',
        title: 'Alt text',
      },
    ],
  }
}

export default Media
