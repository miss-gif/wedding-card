import className from 'classnames/bind'
import styles from './Heading.module.scss'
import Section from '../shared/Section'
import { format, getDay, parseISO } from 'date-fns'

const cx = className.bind(styles)

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const Heading = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date)

  return (
    <Section className={cx('container')}>
      <div className={cx('text-date')}>{format(weddingDate, 'yyyy.MM.dd')}</div>
      <div className={cx('text-day')}>{DAYS[getDay(weddingDate)]}</div>
    </Section>
  )
}

export default Heading
