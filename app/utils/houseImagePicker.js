import Pouffsouffle from '../static/images/pouffsoufleLogo.png'
import Gryffondor from '../static/images/gryffondorLogo.png'
import Serdaigle from '../static/images/serdaigleLogo.png'
import Serpentard from '../static/images/serpentardLogo.png'

const houseImagePicker = house => {
  switch (house) {
    case 'Gryffindor':
      return Gryffondor
    case 'Slytherin':
      return Serpentard
    case 'Hufflepuff':
      return Pouffsouffle
    case 'Ravenclaw':
      return Serdaigle
    default:
      return Gryffondor
  }
}

export default houseImagePicker
