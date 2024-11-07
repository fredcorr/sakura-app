import { Image as ImageType } from '_types/cms/base'
import { NavigationType } from '_types/cms/global/navigation'
import Image from 'next/image'
import Link from 'next/link'

export interface NavgationProps extends NavigationType {
	logo: ImageType
}

const Navigation = ({ navigation_links, logo }: NavgationProps) => {
	return (
		<header>
			<nav>
				<Image
					height={logo.metadata.dimensions.height}
					width={logo.metadata.dimensions.width}
					alt={logo.alt || 'Sakura Living'}
					blurDataURL={logo.metadata.lqip}
					src={logo.url}
				/>
				{navigation_links.map(({ page_title, _id, slug: { current } }, i) => (
					<Link key={_id} href={`/${current}`}>
						{page_title}
					</Link>
				))}
			</nav>
		</header>
	)
}

export default Navigation
