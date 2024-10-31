import classNames from 'classnames/bind'
import styles from './Calender.module.scss'
import Section from '../shared/Section'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'

import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'
import { memo } from 'react'

const cx = classNames.bind(styles)

const css = `
.rdp-month_caption { display: none; }
.rdp-nav{ display: none; }
.rdp-months { pointer-events: none;}
.rdp-selected {
  }
  .rdp-selected .rdp-day_button  {
    color: white;
    border: 1px solid var(--red);
    background-color: var(--red);
}
`

const Calender = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date)

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('text-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('text-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calender')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          mode="single"
          month={weddingDate}
          selected={weddingDate}
          formatters={{
            formatCaption: () => '',
          }}
        />
      </div>
    </Section>
  )
}

export default memo(Calender)
