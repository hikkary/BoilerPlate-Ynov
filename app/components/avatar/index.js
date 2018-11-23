import React from 'react'
import styled from 'styled-components'

const AvatarContainer = styled.View`
  background-color: red;
  height: 40px;
  width: 40px;
`

export default class Avatar extends React.Component() {
  render() {
    return <AvatarContainer />
  }
}
