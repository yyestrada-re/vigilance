import { createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './components/Home'
import Maps from './components/Maps'
import NavBar from './components/NavBar'

const RootStack = createStackNavigator({
  Default: {
    screen: Home
  },
  Maps: {
    screen: Maps
  },
  NavBar: {
    screen: NavBar
  }
});

const App = createAppContainer(RootStack);

export default App;
