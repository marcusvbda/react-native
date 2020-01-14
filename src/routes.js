import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Splash from '~/pages/Splash';
import Main from '~/pages/Main';
import Course from '~/pages/Course';
import Login from '~/pages/Login';
import SetSchool from '~/pages/SetSchool';

const Auth = createSwitchNavigator({
    Login,
    SetSchool
}, { backBehavior: 'history' });

const App = createSwitchNavigator({
    Main,
    Course
}, { backBehavior: 'history' });


const SwitchNavigator = createSwitchNavigator({
    Splash,
    App,
    Auth
});
export default createAppContainer(SwitchNavigator);