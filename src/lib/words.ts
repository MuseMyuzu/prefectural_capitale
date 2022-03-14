import { WORDS } from '../constants/wordlist'
import { VALID_GUESSES } from '../constants/validGuesses'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALID_GUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

//参考：https://sbfl.net/blog/2017/06/01/javascript-reproducible-random/
class Random {
  x: number
  y: number
  z: number
  w: number

  constructor(seed = 88675123) {
    this.x = 123456789
    this.y = 362436069
    this.z = 521288629
    this.w = seed
  }

  // XorShift
  next() {
    let t

    t = this.x ^ (this.x << 11)
    this.x = this.y
    this.y = this.z
    this.z = this.w
    return (this.w = this.w ^ (this.w >>> 19) ^ (t ^ (t >>> 8)))
  }

  // min以上max以下の乱数を生成する
  nextInt(min: number, max: number) {
    const r = Math.abs(this.next())
    return min + (r % (max + 1 - min))
  }
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = new Date('January 1, 2022 00:00:00').valueOf()
  const now = Date.now()
  // デバッグ用。好きな日付を設定
  //const now = Date.parse('14 Mar 2022 00:00:00 GMT')
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  //お題を決める乱数を発生
  const random = new Random(index)
  let value = 0

  for (let i = 0; i < index; i++) {
    value = random.nextInt(0, 27)
  }

  //お題をコンソールに表示
  //console.log(WORDS[value].toUpperCase())

  return {
    solution: WORDS[value].toUpperCase(),
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
