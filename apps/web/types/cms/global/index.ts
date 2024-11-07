import { GlobalItem, GlobalItemTypeName } from '../base'

export type GlobalData = {
	[key in GlobalItemTypeName]: GlobalItem
}
