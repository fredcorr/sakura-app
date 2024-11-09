import { NavigationType } from '_types/cms/global/navigation'
import styles from './Navigation.module.scss'
import { Image } from '_types/cms/base'
import Media from '_atoms/Media/Media'
import Link from 'next/link'

export interface NavgationProps extends NavigationType {
	logo: Image
}

const Navigation = ({ navigation_links, logo }: NavgationProps) => {
	const navLinksHalf = Math.floor(navigation_links.length / 2)

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.leftNav}>
					{navigation_links
						.slice(0, navLinksHalf)
						.map(({ page_title, _id, slug: { current } }, i) => (
							<Link key={_id} className={styles.navLink} href={`/${current}`}>
								{page_title}
							</Link>
						))}
				</div>
				<Media {...logo} className={styles.logo} />
				<div className={styles.rightNav}>
					{navigation_links
						.slice(navLinksHalf)
						.map(({ page_title, _id, slug: { current } }, i) => (
							<Link key={_id} className={styles.navLink} href={`/${current}`}>
								{page_title}
							</Link>
						))}
				</div>
			</nav>
		</header>
	)
}

export default Navigation
