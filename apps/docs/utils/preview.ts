export interface PreviewObject {
  title?: any
  subtitle?: any
  media?: any
}

export interface PreviewProps extends PreviewObject {
  select?: PreviewObject
  prepare: (value: any) => PreviewObject
}

export const preview = ({select, prepare}: PreviewProps) => {
  return {
    select,
    prepare,
  }
}
