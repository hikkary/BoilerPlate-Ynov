import Enzyme from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

// This simply configures Enzyme to work with React.
// With that done we need to tell Jest to run this file before tests are run.
