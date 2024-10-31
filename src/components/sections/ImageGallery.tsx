import second from 'classnames/bind'
import style from './ImageGallery.module.scss'
import Section from '../shared/Section'
import ImageViewer from '../ImageViewer/ImageViewer'
import { useState } from 'react'
import generateImageUrl from '../../utils/generatorImageUrl'

const cx = second.bind(style)

const ImageGallery = ({ images }: { images: string[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const open = selectedIndex > -1

  const handleSelectedImage = (index: number) => {
    setSelectedIndex(index)
  }

  const handleClose = () => {
    setSelectedIndex(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, index) => {
            return (
              <li
                key={index}
                className={cx('wrap-image')}
                onClick={() => {
                  handleSelectedImage(index)
                }}
              >
                <picture>
                  <source
                    srcSet={generateImageUrl({
                      filename: src,
                      format: 'webp',
                      option: 'w_240,h_240,q_auto,c_fill',
                    })}
                    type="image/webp"
                  />
                  <img
                    src={generateImageUrl({
                      filename: src,
                      format: 'jpg',
                      option: 'w_240,h_240,c_fill,q_auto',
                    })}
                    alt="사진첩 이미지"
                  />
                </picture>
              </li>
            )
          })}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIndex={selectedIndex}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
