'use client'

import { HomepageHero as HomepageHeroYype } from '_types/cms/components/homepage-hero'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import styles from './HomepageHero.module.scss'
import Media from '_atoms/Media/Media'
import { useState } from 'react'

const HomepageHero = ({ homepage_hero_slides }: HomepageHeroYype) => {
	const [activeSlide, setActiveSlide] = useState<number>(0)
	const image =
		!!homepage_hero_slides?.length &&
		homepage_hero_slides[activeSlide].slide_image

	return (
		<ComponentLayout
			className={styles.HomepageHero}
			innerClassName={styles.HomepageHeroInner}
			background={
				image && <Media {...image} className={styles.HomepageHeroImage} />
			}
		>
			{homepage_hero_slides?.length && (
				<nav className={styles.HomepageHeroNav}>
					{homepage_hero_slides.map(
						({ slide_title, slide_description, slide_link_label }) => (
							<div className={styles.HomepageHeroSlide}>
								{slide_title && (
									<p className={styles.slideTitle}>{slide_title}</p>
								)}
								{slide_description && (
									<p className={styles.slideDescription}>{slide_description}</p>
								)}
								{slide_link_label && (
									<p className={styles.slide_link}>{slide_link_label}</p>
								)}
							</div>
						),
					)}
				</nav>
			)}
		</ComponentLayout>
	)
}

export default HomepageHero
