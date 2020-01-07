import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Hello from './pages/Hello'

const Routes = createAppContainer(
    createSwitchNavigator({
        Hello
    })
)

export default Routes