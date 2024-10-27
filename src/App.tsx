import classNames from 'classnames/bind'
import styles from './App.module.scss'
import { useEffect, useState } from 'react'
import FullScreenMessage from './components/shared/FullScreenMessage'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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

  return (
    <>
      <div className={cx('container')}>{JSON.stringify(wedding)}</div>
    </>
  )
}

export default App
