import React from 'react'
import renderer from 'react-test-renderer'

import Avatar from '../'

it('renders successfully ', () => {
  const rendered = renderer.create(<Avatar />).toJSON()
  console.log(rendered)
  console.log(rendered.props.style)
  expect(rendered).toBeTruthy()
}) // test de base
// allow us to see if refacto or code change does not make crash the component

it('renders successfully ', () => {
  const rendered = renderer.create(<Avatar />).toJSON()
  console.log(rendered)
  console.log(rendered.props.style)
  expect(rendered).toMatchSnapshot()
}) // test cree snapshot pour voir les changement

it('has a red backgroundColor', () => {
  const rendered = renderer.create(<Avatar />).toJSON()
  console.log(rendered.props.style)
  expect(rendered.props.style[0].backgroundColor).toBe('red')
})
