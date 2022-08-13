// Given a string s, find the length of the longest substring without repeating characters.

export const lengthOfLongestSubstring = (str: string): number => {
  const chars = str.split('')
  let lastLongest: string[] = []
  let readChars: string[] = []

  chars.forEach((char) => {
    if (readChars.includes(char)) {
      lastLongest = readChars.length > lastLongest.length ? readChars : lastLongest
      const pos = readChars.indexOf(char)
      readChars = readChars.slice(pos + 1)
    }

    readChars.push(char)
  })

  // console.log({ lastLongest, readChars })
  return readChars.length > lastLongest.length ? readChars.length : lastLongest.length
}
