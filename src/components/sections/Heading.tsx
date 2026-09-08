import { parseISO, format } from 'date-fns'
import classNames from 'classnames/bind'
import styles from './Heading.module.scss'

import Section from '@shared/Section'

const cx = classNames.bind(styles)

function Heading({ date }: { date: string }) {
	const weddingDate = parseISO(date)
	return (
		<Section className={cx('container')}>
			<div className={cx('date')}>{format(weddingDate, 'yyyy.MM.dd')}</div>
			<div className={cx('day')}>{format(weddingDate, 'EEEE')}</div>
		</Section>
	)
}

export default Heading
