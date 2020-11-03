import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile167017Navigator from '../features/UserProfile167017/navigator';
import Settings167016Navigator from '../features/Settings167016/navigator';
import Settings167014Navigator from '../features/Settings167014/navigator';
import SignIn2167012Navigator from '../features/SignIn2167012/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile167017: { screen: UserProfile167017Navigator },
Settings167016: { screen: Settings167016Navigator },
Settings167014: { screen: Settings167014Navigator },
SignIn2167012: { screen: SignIn2167012Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
