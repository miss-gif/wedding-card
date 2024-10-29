import className from 'classnames/bind'
import styles from './Section.module.scss'

const cx = className.bind(styles)

const Section = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: React.ReactNode
}) => {
  return (
    <section className={cx(['container'], className)}>
      {title != null && <h2 className={cx('text-title')}>{title}</h2>}
      {children}
    </section>
  )
}

export default Section
