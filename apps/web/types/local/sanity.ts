import { CmsPage, GlobalItem, GlobalItemTypeName } from '_types/cms/base'
import { GlobalData } from '_types/cms/global'

export type GetSinglePage = (
	slug?: string[],
	preview?: boolean,
) => Promise<CmsPage>

export type GetAllPages = () => Promise<string[]>

export type GetGlobalItem = (_type: GlobalItemTypeName) => Promise<GlobalItem>

export type GetAllGlobalData = () => Promise<GlobalData>
