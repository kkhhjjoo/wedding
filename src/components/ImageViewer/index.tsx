import { Swiper, SwiperSlide } from 'swiper/react'

import classNames from 'classnames/bind'

import 'swiper/css'

import './swiper.css'

import styles from './ImageViewer.module.scss'
import Dimmed from '@shared/Dimmed'

const cx = classNames.bind(styles)

function ImageViewer({
	images,
	open = false,
	selectedIdx,
	onClose,
}: {
	images: string[]
	open: boolean
	selectedIdx: number
	onClose: () => void
}) {
	if (open === false) {
		return null
	}
	return (
		<Dimmed>
			<CloseButton className={cx('close')} onClose={onClose} />
			<Swiper
				spaceBetween={20}
				slidesPerView={1}
				loop={true}
				initialSlide={selectedIdx}
			>
				{images.map((src, idx) => {
					return (
						<SwiperSlide key={idx}>
							<img src={src} alt="이미지 뷰어" />
						</SwiperSlide>
					)
				})}
			</Swiper>
		</Dimmed>
	)
}

function CloseButton({
	onClose,
	className,
}: {
	onClose: () => void
	className: string
}) {
	return (
		<svg
			className={className}
			onClick={onClose}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M6 18 18 6M6 6l12 12"
			/>
		</svg>

		// <img
		// 	width={20}
		// 	height={20}
		// 	className={className}
		// 	onClick={onClose}
		// 	src="/assets/icons/close.gif"
		// 	alt="close"
		// />
	)
}

export default ImageViewer
