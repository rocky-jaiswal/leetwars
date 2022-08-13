import { lengthOfLongestSubstring } from '.'

test('3LongestSubString', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  expect(lengthOfLongestSubstring('bbbb')).toBe(1)
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  expect(lengthOfLongestSubstring(' ')).toBe(1)
  expect(lengthOfLongestSubstring('dvdf')).toBe(3)
  expect(lengthOfLongestSubstring('ohvhjdml')).toBe(6)
})
