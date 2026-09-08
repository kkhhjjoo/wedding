import classNames from 'classnames/bind'
import Section from '@shared/Section'

import styles from './Intro.module.scss'

import flowerIcon from '../../assets/icons/flower.png'

import Text from '@shared/Text'

import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'

const cx = classNames.bind(styles)

interface IntroProps {
	groomName: string
	brideName: string
	date: string
	locationName: string
	message: string
}

function Intro({
	groomName,
	brideName,
	message,
	locationName,
	date,
}: IntroProps) {
	return (
		<Section className={cx('container')}>
			<div className={cx('wrap-persons')}>
				<span>{groomName}</span>
				<IconHeart className={cx('heart')} />
				<span>{brideName}</span>
			</div>

			<div className={cx('wrap-location')}>
				<span>
					{format(parseISO(date), 'yyyy년 M월 d일 eeee', { locale: ko })}
				</span>
				<span>{locationName}</span>
			</div>

			<IconFlower className={cx('ico-flower')} />

			<Text>{message}</Text>
		</Section>
	)
}

function IconHeart({ className }: { className: string }) {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			fill="pink"
			viewBox="0 0 24 24"
			stroke-width="1"
			stroke="none"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
			/>
		</svg>
	)
}

function IconFlower({ className }: { className: string }) {
	return <img width={16} className={className} src={flowerIcon} alt="꽃" />
}

export default Intro
