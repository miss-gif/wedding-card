import React from 'react'

import classNames from 'classnames/bind'
import styles from './Modal.module.scss'
import Dimmed from './Dimmed'

const cx = classNames.bind(styles)

interface ModalProps {
  open: boolean
  title?: string
  body: React.ReactNode
  rightButton?: string
  onRightButtonClick?: () => void
  leftButton?: string
  onLeftButtonClick?: () => void
}

const Modal = ({
  open,
  title,
  body,
  rightButton = '닫기',
  leftButton = '확인',
  onRightButtonClick,
  onLeftButtonClick,
}: ModalProps) => {
  if (!open) {
    return null
  }

  return (
    <Dimmed>
      <div className={cx('wrap-modal')}>
        <div className={cx('wrap-body')}>
          <div className={cx('wrap-content')}>
            {title == null ? null : (
              <div className={cx('wrap-title')}>{title}</div>
            )}
            {body}
          </div>
          <div className={cx('wrap-buttons')}>
            <button onClick={onRightButtonClick}>{rightButton}</button>
            <button onClick={onLeftButtonClick}>{leftButton}</button>
          </div>
        </div>
      </div>
    </Dimmed>
  )
}

export default Modal
