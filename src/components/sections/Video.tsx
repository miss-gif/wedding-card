import className from 'classnames/bind'
import styles from './Video.module.scss'
import Section from '../shared/Section'

const cx = className.bind(styles)

const Video = () => {
  return (
    <Section className={cx('container')}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        poster="/assets/poster.png"
        // controls={true}
      >
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}

export default Video
