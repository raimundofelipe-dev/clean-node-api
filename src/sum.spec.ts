import { sum } from './sum'

describe('Sum', () => {
  test('should return 4', () => {
    expect(sum(2, 2)).toBe(4)
  })
})
