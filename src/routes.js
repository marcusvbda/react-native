import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Loader from './pages/Loader'
import SetSchool from './pages/Auth/SetSchool'
import Login from './pages/Auth/Login'
import Home from './pages/Home'

const Routes = createAppContainer(
    createSwitchNavigator({
        Loader,
        SetSchool,
        Login,
        Home
    })
)

export default Routes