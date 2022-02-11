import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="遊び方 How to play"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300 text-left">
        {' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          Wordle
        </a>{' '}
        をプチ改造しました。
        <br></br>
        日本の県庁所在地の名前を "ひらがな"
        で入力してください。（ただし、「～市」は除く）
      </p>

      <div className="flex justify-center mb-1 mt-6">
        <Cell value="や" status="correct" />
        <Cell value="ま" />
        <Cell value="な" />
        <Cell value="し" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        「や」は正しい位置にあります。
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="お" />
        <Cell value="き" status="present" />
        <Cell value="な" />
        <Cell value="わ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        「き」は場所が違います。
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="は" />
        <Cell value="ま" />
        <Cell value="ま" />
        <Cell value="つ" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        「つ」は含まれていません。
      </p>
      <br></br>
      <hr></hr>
      <br></br>

      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100 text-left">
        注意
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-300 text-left">
        47の県庁所在地を入力できますが、答えとなる都市は<b>ひらがなで4文字</b>
        のものです。
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="う" />
        <Cell value="ら" />
        <Cell value="わ" />
        <Cell />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        三文字以下でも入力できます。
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="し" />
        <Cell value="も" />
        <Cell value="の" />
        <Cell value="せ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        五文字以上の都市（しものせき）も、最初の四文字を入力できます。
      </p>

      <br></br>
      <hr></hr>
      <br></br>

      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100 text-left">
        リンク
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-300 text-left">
        コードは{' '}
        <a
          href="https://github.com/MuseMyuzu/PrefecturalCapitalsWordle"
          className="underline"
        >
          Git
        </a>{' '}
        で公開しています。
      </p>
      <br></br>
      <p className="text-sm text-gray-500 dark:text-gray-300 text-left">
        YouTube と Twitter やってます。
        <p className="font-medium">
          YouTube :{' '}
          <a
            href="https://www.youtube.com/channel/UC71_UDvWYvzwG6y4rDdH4Kg"
            className="underline"
          >
            ミューズの情報教室
          </a>
          <br></br>
          Twitter :{' '}
          <a href="https://twitter.com/musemyuzu" className="underline">
            @musemyuzu
          </a>
        </p>
      </p>
    </BaseModal>
  )
}
