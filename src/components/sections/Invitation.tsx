import styles from './Invitation.module.scss'
import classNames from 'classnames/bind'
import Section from '@shared/Section'
import Text from '@shared/Text'

import PostIcon from '../../assets/icons/post.png'

const cx = classNames.bind(styles)

function Invitation({ message }: { message: string }) {
	return (
		<Section className={cx('container')}>
			<IconPost className={cx('ico-post')} />
			<Text>Invitation</Text>
		</Section>
	)
}

function IconPost({ className }: { className: string }) {
	return <img width={24} className={className} src={PostIcon} alt="post" />
}

export default Invitation
