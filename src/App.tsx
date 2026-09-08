import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import FullScreenMessage from '@shared/FullScreenMessage'
import Heading from '@sections/Heading'
import Video from '@sections/Video'

import { Wedding } from '@models/wedding'

import styles from './App.module.scss'
import ImageGallery from '@sections/ImageGallery'
import Intro from '@sections/Intro'
import Invitation from '@sections/Invitation'
import Calendar from '@sections/Calendar'

const cx = classNames.bind(styles)

function App() {
	const [wedding, setWedding] = useState<Wedding | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	//1. wedding 데이터 호출
	useEffect(() => {
		setLoading(true)

		fetch('http://localhost:8000/wedding')
			.then((res) => {
				if (res.ok === false) {
					throw new Error('청첩장 정보를 불러오지 못했습니다.')
				}
				return res.json()
			})
			.then((data) => {
				setWedding(data)
				setLoading(false)
			})
			.catch((error) => {
				console.error('에러발생', error)
				setError(true)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])

	if (loading) {
		return <FullScreenMessage type="loading" />
	}
	if (error) {
		return <FullScreenMessage type="error" />
	}

	if (wedding === null) {
		return null
	}
	const {
		galleryImages,
		groom,
		bride,
		location,
		date,
		message: { intro, invitation },
	} = wedding
	return (
		<div className={cx('container')}>
			<Heading date={date} />
			<Video />
			<Intro
				groomName={groom.name}
				brideName={bride.name}
				locationName={location.name}
				date={date}
				message={intro}
			/>
			<Invitation message={invitation} />
			<ImageGallery images={galleryImages} />
			<Calendar date={date} />
			{JSON.stringify(wedding)}
		</div>
	)
}

export default App
