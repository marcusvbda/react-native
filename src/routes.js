import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Splash from '~/pages/Splash';
import Main from '~/pages/Main';
import Login from '~/pages/Login';
import SetSchool from '~/pages/SetSchool';

const Auth = createSwitchNavigator({
    Login,
    SetSchool
});

const App = createSwitchNavigator({
    Main
});

const SwitchNavigator = createSwitchNavigator({
    Splash,
    App,
    Auth
});
export default createAppContainer(SwitchNavigator);