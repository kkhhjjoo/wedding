import styles from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'
import heartIcon from '../../assets/icons/heart.gif'
import errorIcon from '../../assets/icons/error.png'

const cx = classNames.bind(styles)

interface FullScreenMessageProps {
	type: 'loading' | 'error'
}

function FullScreenMessage({ type }: FullScreenMessageProps) {
	return (
		<div className={cx('container')}>
			{type === 'loading' ? <Heart /> : <Error />}
		</div>
	)
}

function Heart() {
	return (
		<img
			className={cx('icon-heart')}
			src={heartIcon}
			alt="Heart"
			width={50}
			height={50}
		/>
	)
}

function Error() {
	return (
		<>
			<img
				className={cx('icon-error')}
				src={errorIcon}
				alt="Error"
				width={50}
				height={50}
			/>
			<p>에러가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
		</>
	)
}
export default FullScreenMessage
