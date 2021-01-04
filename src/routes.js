import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './pages/login/login';
import MenuConfig from './pages/menu/menu-config';

const routes = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Menu: {
      screen: MenuConfig,
    },
  },
  {headerMode: null},
);

const Routes = createAppContainer(routes);
export default Routes;
