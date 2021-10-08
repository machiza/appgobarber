import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#312e38' }}>
      <Routes />
    </GestureHandlerRootView>
  </NavigationContainer>
);

export default App;
