import classNames from 'classnames/bind'
import styles from './App.module.scss'
import AttendCountModal from './components/AttendCountModal/AttendCountModal'
import Calender from './components/sections/Calender'
import Contact from './components/sections/Contact'
import Heading from './components/sections/Heading'
import ImageGallery from './components/sections/ImageGallery'
import Intro from './components/sections/Intro'
import Invitation from './components/sections/Invitation'
import Map from './components/sections/Map'
import Video from './components/sections/Video'
import FullScreenMessage from './components/shared/FullScreenMessage'
import Share from './components/shared/Share'
import useWedding from './hooks/useWedding'

const cx = classNames.bind(styles)

function App() {
  const { wedding, error } = useWedding()

  if (error) {
    return (
      <>
        <FullScreenMessage type="error" />
      </>
    )
  }

  if (!wedding) {
    return null
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding

  return (
    <>
      <div className={cx('container')}>
        <Heading date={date} />
        <Video />
        <Intro
          groomName={groom.name}
          bridName={bride.name}
          locationName={location.name}
          date={date}
          message={intro}
        />
        <Invitation message={invitation} />
        <ImageGallery images={galleryImages} />
        <Calender date={date} />
        <Map location={location} />
        <Contact groom={groom} bride={bride} />
        <Share groomName={groom.name} bridName={bride.name} date={date} />

        <AttendCountModal wedding={wedding} />
      </div>
    </>
  )
}

export default App
