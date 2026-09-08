import classNames from 'classnames/bind'
import styles from './Accordion.module.scss'
import { PropsWithChildren, useState } from 'react'

import ArrowDown from '../../assets/icons/arrow-down.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

interface AccordionProps {
	label: string
}

function Accordion({ label, children }: PropsWithChildren<AccordionProps>) {
	const [expanded, setExpanded] = useState(false)

	const handleToggle = () => {
		setExpanded((prev) => !prev)
	}

	return (
		<div className={cx(['wrap-accordion', expanded ? 'open' : ''])}>
			<div className={cx('wrap-header')} onClick={handleToggle}>
				<span>{label}</span>
				<IconArrowDown className={cx('ico-arrow-down')} />
			</div>
			<div className={cx('wrap-content')}>{children}</div>
		</div>
	)
}

function IconArrowDown({ className }: { className: string }) {
	return <FontAwesomeIcon className={className} icon={faAngleDown} />
}

export default Accordion
