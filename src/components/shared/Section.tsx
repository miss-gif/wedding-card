import className from 'classnames/bind'
import styles from './Section.module.scss'

const cx = className.bind(styles)

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <section className={cx(['container'], className)}>{children}</section>
}

export default Section
