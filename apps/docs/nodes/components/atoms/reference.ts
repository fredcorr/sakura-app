import {BaseFields} from '../../../types/base'
import {PageTypeName} from '../../../types/pages'

export interface ReferenceProps extends BaseFields {
  refs: {
    type: PageTypeName
  }[]
}

const Reference = ({refs, ...base}: ReferenceProps) => {
  return {
    ...base,
    type: 'reference',
    to: refs,
  }
}

export default Reference
