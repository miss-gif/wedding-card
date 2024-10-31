import classNames from 'classnames/bind'
import styles from './App.module.scss'
import { useEffect, useState } from 'react'
import FullScreenMessage from './components/shared/FullScreenMessage'
import Heading from './components/sections/Heading'
import Video from './components/sections/Video'
import { Wedding } from './models/wedding'
import ImageGallery from './components/sections/ImageGallery'
import Intro from './components/sections/Intro'
import Invitation from './components/sections/Invitation'
import Calender from './components/sections/Calender'
import Map from './components/sections/Map'
import Contact from './components/sections/Contact'
import Share from './components/shared/Share'
import Modal from './components/shared/Modal'
import AttendCountModal from './components/AttendCountModal/AttendCountModal'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setLoading(true)
    const URL = 'http://localhost:8888/wedding'
    fetch(URL)
      .then((res) => {
        if (res.ok === false) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then((data) => {
        setWedding(data)
        console.log(JSON.stringify(data))

        setLoading(false)
      })
      .catch((err) => {
        console.log('에러발생', err)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
    return () => {}
  }, [])

  if (loading) {
    return (
      <>
        <FullScreenMessage type="loading" />
      </>
    )
  }

  if (error) {
    return (
      <>
        <FullScreenMessage type="error" />
      </>
    )
  }

  if (wedding === null) {
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
      <button
        style={{
          position: 'fixed',
          padding: '10px',
        }}
        onClick={() => setCount(count + 1)}
      >
        {count} +
      </button>
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
