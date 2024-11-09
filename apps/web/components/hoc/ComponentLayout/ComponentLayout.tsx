import { ReactNode } from 'react'

export interface ComponentLayoutProps {
	innerClassName?: string
	className?: string
	background?: ReactNode
	children?: ReactNode
}

const ComponentLayout = ({
	innerClassName,
	background,
	className,
	children,
}: ComponentLayoutProps) => {
	return (
		<section className={`componentLayout ${className ?? ''}`}>
			<div className={`componentLayoutInner ${innerClassName ?? ''}`}>
				{children}
			</div>
			{background}
		</section>
	)
}

export default ComponentLayout
