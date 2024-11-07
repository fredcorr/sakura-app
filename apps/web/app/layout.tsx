import { Space_Grotesk, Work_Sans } from 'next/font/google'
import Navigation from '_organisms/Navigation/Navigation'
import { GlobalItemTypeName } from '_types/cms/base'
import { getAllGlobalData } from '_lib/sanity'
import '../styles/main.scss'
import { NavigationType } from '_types/cms/global/navigation'
import { SiteSettingsType } from '_types/cms/global/site-settings'

const SpaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	display: 'swap',
	variable: '--SpaceGrotesk',
})

const WorkSans = Work_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--WorkSans',
})

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const globalData = await getAllGlobalData()
	const logo = (globalData.site_settings as SiteSettingsType).brand_logo

	return (
		<html
			lang="en"
			className={`${SpaceGrotesk.variable}, ${WorkSans.variable}`}
		>
			<body>
				<Navigation
					logo={logo}
					{...(globalData.navigation as NavigationType)}
				></Navigation>
				<main>{children}</main>
			</body>
		</html>
	)
}
