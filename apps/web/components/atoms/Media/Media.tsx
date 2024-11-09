import { Image as ImageType } from '_types/cms/base'
import Image from 'next/image'

export interface ImageProps extends ImageType {
	className?: string
}

const Media = (img: ImageProps) => {
	if (!img.url) return null

	return (
		<Image
			height={img.metadata.dimensions.height}
			width={img.metadata.dimensions.width}
			alt={img.alt || 'Sakura Living'}
			blurDataURL={img.metadata.lqip}
			className={img.className}
			src={img.url}
		/>
	)
}

export default Media
