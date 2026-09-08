import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Map.module.scss'
import { useEffect, useRef } from 'react'
import { Location } from '@models/wedding'

declare global {
	interface Window {
		kakao: any
	}
}

const cx = classNames.bind(styles)

function Map({ location }: { location: Location }) {
	const mapContainer = useRef(null)
	useEffect(() => {
		const script = document.createElement('script')
		script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`
		script.async = true

		document.head.appendChild(script)

		script.onload = () => {
			window.kakao.maps.load(() => {
				const position = new window.kakao.maps.LatLng(
					location.lat,
					location.lng,
				)

				const options = {
					center: position,
					level: 3,
				}
				const marker = new window.kakao.maps.Marker({
					position,
				})
				const map = new window.kakao.maps.Map(mapContainer.current, options)
				marker.setMap(map)
			})
		}
	}, [location])
	return (
		<Section>
			<div>
				<div className={cx('wrap-map')} ref={mapContainer}></div>
			</div>
		</Section>
	)
}

export default Map
