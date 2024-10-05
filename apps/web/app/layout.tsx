import { Space_Grotesk, Work_Sans } from 'next/font/google'
import Navigation from '_organisms/Navigation/Navigation'
import Footer from '_organisms/Footer/Footer'
import '../styles/main.scss'

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

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className={`${SpaceGrotesk.variable}, ${WorkSans.variable}`}
		>
			<body>
				<Navigation></Navigation>
				<main>{children}</main>
			</body>
		</html>
	)
}
