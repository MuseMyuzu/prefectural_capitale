import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
  isRevealing?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  guesses,
  isRevealing,
}: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        {['あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ'].map(
          (key) => (
            <Key
              value={key}
              key={key}
              onClick={onClick}
              status={charStatuses[key]}
              isRevealing={isRevealing}
            />
          ),
        )}
        <Key width={65.4} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>

      <div className="flex justify-center mb-1">
        {['い', 'き', 'し', 'ち', 'に', 'ひ', 'み'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        {<Key value={''} onClick={onClick} />}
        {['り'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        {<Key value={''} onClick={onClick} />}
      </div>

      <div className="flex justify-center mb-1">
        {['う', 'く', 'す', 'つ', 'ぬ', 'ふ', 'む', 'ゆ', 'る', 'を'].map(
          (key) => (
            <Key
              value={key}
              key={key}
              onClick={onClick}
              status={charStatuses[key]}
              isRevealing={isRevealing}
            />
          ),
        )}
      </div>

      <div className="flex justify-center mb-1">
        {['え', 'け', 'せ', 'て', 'ね', 'へ', 'め'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        {<Key value={''} onClick={onClick} />}
        {['れ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        {<Key value={''} onClick={onClick} />}
      </div>

      <div className="flex justify-center mb-5">
        {['お', 'こ', 'そ', 'と', 'の', 'ほ', 'も', 'よ', 'ろ', 'ん'].map(
          (key) => (
            <Key
              value={key}
              key={key}
              onClick={onClick}
              status={charStatuses[key]}
              isRevealing={isRevealing}
            />
          ),
        )}
      </div>

      <div className="flex justify-center mb-1">
        {['が', 'ざ', 'だ', 'ば', 'ぱ', 'っ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        {['', '', '', ''].map(() => (
          <Key value={''} onClick={onClick} />
        ))}
      </div>

      <div className="flex justify-center mb-1">
        {['ぎ', 'じ', 'ぢ', 'び', 'ぴ', 'ゃ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        {['', '', '', ''].map(() => (
          <Key value={''} onClick={onClick} />
        ))}
      </div>

      <div className="flex justify-center mb-1">
        {['ぐ', 'ず', 'づ', 'ぶ', 'ぷ', 'ゅ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        {['', '', '', ''].map(() => (
          <Key value={''} onClick={onClick} />
        ))}
      </div>

      <div className="flex justify-center mb-1">
        {['げ', 'ぜ', 'で', 'べ', 'ぺ', 'ょ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        {['', '', '', ''].map(() => (
          <Key value={''} onClick={onClick} />
        ))}
      </div>

      <div className="flex justify-center">
        {['ご', 'ぞ', 'ど', 'ぼ', 'ぽ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        {['', '', '', '', ''].map(() => (
          <Key value={''} onClick={onClick} />
        ))}
      </div>
    </div>
  )
}
