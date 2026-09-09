import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Share.module.scss'
import { useEffect } from 'react'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKakaoTalk } from '@fortawesome/free-brands-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'

import { CopyToClipboard } from 'react-copy-to-clipboard'

declare global {
	interface Window {
		Kakao: any
	}
}

interface ShareProps {
	groomName: string
	brideName: string
	date: string
}

const cx = classNames.bind(styles)

function Share({ groomName, brideName, date }: ShareProps) {
	useEffect(() => {
		const script = document.createElement('script')
		script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js'
		script.async = true

		document.head.appendChild(script)

		script.onload = () => {
			console.log(window)

			if (!window.Kakao.isInitialized()) {
				window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
			}
		}
	}, [])

	const handleShareKakao = () => {
		window.Kakao.Share.sendDefault({
			objectType: 'feed',
			content: {
				title: `${groomName} ♥️ ${brideName} 결혼합니다.`,
				description: `${format(parseISO(date), 'M월 d일 eeee aaa h시', { locale: ko })}`,
				imageUrl:
					'https://img.magnific.com/premium-vector/cute-asian-groom-bride-characters-flat-design-style-vector-illustration_540284-382.jpg?semt=ais_hybrid&w=740&q=80',
				link: {
					mobileWebUrl: window.location.origin, //http://localhost:3000
					webUrl: window.location.origin,
				},
			},
			buttons: [
				{
					title: '청첩장 보기',
					link: {
						mobileWebUrl: window.location.origin, //http://localhost:3000
						webUrl: window.location.origin,
					},
				},
			],
		})
	}
	return (
		<Section title="공유하기">
			<div className={cx('wrap-share')}>
				<button onClick={handleShareKakao}>
					<IconKakao />
				</button>
				<CopyToClipboard
					text={window.location.origin}
					onCopy={() => {
						window.alert('복사가 완료되었습니다.')
					}}
				>
					<button>
						<IconClipboard />
					</button>
				</CopyToClipboard>
			</div>
		</Section>
	)
}

function IconKakao() {
	return <FontAwesomeIcon className={cx('kakao')} icon={faKakaoTalk} />
}

function IconClipboard() {
	return <FontAwesomeIcon className={cx('clipboard')} icon={faClipboard} />
}

export default Share
