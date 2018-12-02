import { changeTheme } from '../themes'

import { themeBlue, themeGreen, themeRed } from '../../config/themes'

describe('changeTheme', () => {
  it('creates a properly formatted action ', () => {
    const expected = { type: 'CHANGE_THEME' }
    const actual = changeTheme()
    expect(actual).toEqual(expected)
  })
  it('creates a properly formatted action with Blue Theme ', () => {
    const expected = { type: 'CHANGE_THEME', theme: themeBlue }
    const actual = changeTheme(themeBlue)
    expect(actual).toEqual(expected)
  })
  it('creates a properly formatted action with Red Theme ', () => {
    const expected = { type: 'CHANGE_THEME', theme: themeRed }
    const actual = changeTheme(themeRed)
    expect(actual).toEqual(expected)
  })
  it('creates a properly formatted action with Green Theme ', () => {
    const expected = { type: 'CHANGE_THEME', theme: themeGreen }
    const actual = changeTheme(themeGreen)
    expect(actual).toEqual(expected)
  })
})
