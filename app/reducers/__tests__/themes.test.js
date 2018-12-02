import reducer from '../themes'

import { themeBlue, themeRed, themeGreen } from '../../config/themes'
import { changeTheme } from '../../actions/themes'

const initialState = {
  currentTheme: themeBlue
}

// Test Driven Devlopment

it('sets initial state', () => {
  const expected = { ...initialState }
  const actual = reducer(undefined, {})
  expect(actual).toEqual(expected)
})

it('set themes on red ', () => {
  const expected = {
    ...initialState,
    currentTheme: {
      ...themeRed
    }
  }

  const actual = reducer(undefined, changeTheme(themeRed))
  expect(actual).toEqual(expected)
})

it('set themes on green ', () => {
  const expected = {
    ...initialState,
    currentTheme: {
      ...themeGreen
    }
  }

  const actual = reducer(undefined, changeTheme(themeGreen))
  expect(actual).toEqual(expected)
})

it('set themes on blue ', () => {
  const expected = {
    ...initialState,
    currentTheme: {
      ...themeBlue
    }
  }

  const actual = reducer(undefined, changeTheme(themeBlue))
  expect(actual).toEqual(expected)
})

// MATCH SNAPSHOT

it('sets initial state Snapshot', () => {
  expect(reducer(undefined, {})).toMatchSnapshot()
})

it('set themes on red Snapshot ', () => {
  expect(reducer(undefined, changeTheme(themeRed))).toMatchSnapshot()
})

it('set themes on green Snapshot', () => {
  expect(reducer(undefined, changeTheme(themeGreen))).toMatchSnapshot()
})

it('set themes on blue Snapshot', () => {
  expect(reducer(undefined, changeTheme(themeBlue))).toMatchSnapshot()
})
