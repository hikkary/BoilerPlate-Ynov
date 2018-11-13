import { Text } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import houseTextRandomPicker from '../utils/houseTextRandomPicker'
import getRandomInt from '../utils/getRandomInt'

const MagicHatContainer = styled.View`
  background-color: #f5fcff;
  flex: 1;
`

const HatContainer = styled.View`
  align-items: center;
  background-color: red;
  flex: 1;
  justify-content: center;
`

const DialogContainer = styled.View`
  align-items: center;
  background-color: blue;
  flex: 1;
`

const magicHatDialog = [
  'Mmmm... interessant',
  'Poudlard peux etre ? ',
  'peux etre serpentard ? ',
  'Laisse moi un instant? ',
  'peux etre serdaigle ?',
  'ou alors Pouffsoufle ?'
]

export default class MagicHat extends React.Component {
  state = {
    currentDialog: 'Mmmh',
    house: null
  }

  componentDidMount() {
    this.houseSetTimeOut = setTimeout(this.delayedHousePicker, 6000)
    this.dialogInterval = setInterval(this.randomDialogDisplayer, 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.houseSetTimeOut)
    clearInterval(this.dialogInterval)
  }

  randomDialogDisplayer = () => {
    const DialogLength = magicHatDialog.length
    const randomDialog = magicHatDialog[getRandomInt(DialogLength)]
    this.setState({ currentDialog: randomDialog })
  }

  intervalDialogPicker = () => {
    this.randomDialogDisplayer()
  }

  delayedHousePicker = () => {
    clearInterval(this.dialogInterval)
    const house = houseTextRandomPicker()
    this.setState({ currentDialog: `j'ai trouvé tu seras un ${house} !` })
  }

  render() {
    return (
      <MagicHatContainer>
        <HatContainer>
          <Text>ChoixPeau</Text>
        </HatContainer>
        <DialogContainer>
          <Text>{this.state.currentDialog}</Text>
        </DialogContainer>
      </MagicHatContainer>
    )
  }
}
