import classNames from 'classnames/bind'
import styles from './Accordion.module.scss'
import { PropsWithChildren, useState } from 'react'

const cx = classNames.bind(styles)

interface AccordionProps {
  label: string
  children: React.ReactNode
}

const Accordion = ({ label, children }: PropsWithChildren<AccordionProps>) => {
  const [isShow, setIsShow] = useState(false)

  const handleToggle = () => {
    setIsShow(!isShow)
  }

  return (
    <div className={cx(['wrap-accoridon', isShow ? 'open' : ''])}>
      <div className={cx('wrap-header')} onClick={handleToggle}>
        <div>{label}</div>
        <IconArrowDown className={cx('icon-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  )
}

const IconArrowDown = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>
  )
}

export default Accordion
