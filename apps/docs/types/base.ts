export interface BaseFields {
  name: string
  title: string
  options?: FieldOptions
}

export interface KeyValuePair {
  [key: string]: string
}

export interface FieldOptions {
  collapsible?: boolean // Makes the whole fieldset collapsible
  collapsed?: boolean // Defines if the fieldset should be collapsed by default or not
  columns?: number // Defines a grid for the fields and how many columns it should have
  modal?: {type: 'popover'} //Makes the modal type a popover
}
