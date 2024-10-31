import { useEffect, useRef } from 'react'
import { useModalContext } from '../../contexts/ModalContext'
import { Wedding } from '../../models/wedding'

const AttendCountModal = ({ wedding }: { wedding: Wedding }) => {
  const { open, close } = useModalContext()

  const $input = useRef<HTMLInputElement>(null)

  const haveSeenModal = localStorage.getItem('haveSeenModal')

  useEffect(() => {
    if (haveSeenModal) {
      return
    }

    open({
      title: `현재 참석자 수 ${wedding.attendCount}명`,
      body: (
        <div>
          <input
            ref={$input}
            type="number"
            placeholder="참석 가능 인원 추가해주세요"
            style={{ width: '100%' }}
          />
        </div>
      ),
      onRightButtonClick: () => {
        localStorage.setItem('haveSeenModal', 'true')
        close()
      },
      onLeftButtonClick: async () => {
        if ($input.current == null) {
          return
        }
        await fetch('http://localhost:8888/wedding', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...wedding,
            attendCount: wedding.attendCount + Number($input.current.value),
          }),
        })

        localStorage.setItem('haveSeenModal', 'true')
        close()
      },
    })
  }, [open, close, wedding, haveSeenModal])

  return null
}

export default AttendCountModal
