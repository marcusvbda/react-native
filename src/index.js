import React from 'react';
import '~/config/ReactotronConfig';
import { StatusBar } from 'react-native'
import Routes from '~/routes';
import { Colors } from '~/config';

const App = () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
        <Routes />
    </>
);

export default App;