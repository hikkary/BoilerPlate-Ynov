import getRandomInt from './getRandomInt'

const houses = ['Gryffondor', 'Serpentard', 'Pouffsouffle', 'Serdaigle']

const houseTextRandomPicker = () => {
  return houses[getRandomInt(3)]
}

export default houseTextRandomPicker
