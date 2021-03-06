import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings127754Navigator from '../features/Settings127754/navigator';
import Settings127737Navigator from '../features/Settings127737/navigator';
import Settings127720Navigator from '../features/Settings127720/navigator';
import Settings127686Navigator from '../features/Settings127686/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings127754: { screen: Settings127754Navigator },
Settings127737: { screen: Settings127737Navigator },
Settings127720: { screen: Settings127720Navigator },
Settings127686: { screen: Settings127686Navigator },

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
