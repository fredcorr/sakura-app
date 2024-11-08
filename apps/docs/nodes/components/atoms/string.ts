import {BaseFields} from '../../../types/base'

const String = (base: BaseFields) => {
  return {
    ...base,
    type: 'string',
  }
}

export default String
