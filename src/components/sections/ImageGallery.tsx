import second from 'classnames/bind'
import style from './ImageGallery.module.scss'
import Section from '../shared/Section'

const cx = second.bind(style)

const ImageGallery = ({ images }: { images: string[] }) => {
  return (
    <Section title="사진첩">
      <ul className={cx('wrap-images')}>
        {images.map((src, index) => {
          return (
            <li key={index} className={cx('wrap-image')}>
              <img src={src} alt="사진첩 이미지" />
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export default ImageGallery
