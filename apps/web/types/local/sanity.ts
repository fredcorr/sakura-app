import { CmsPage } from '_types/cms/base'

export type GetSinglePage = (
	slug?: string[],
	preview?: boolean,
) => Promise<CmsPage>

export type GetAllPages = () => Promise<string[]>
