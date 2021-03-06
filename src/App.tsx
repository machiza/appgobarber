import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <AppProvider>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Routes />
      </GestureHandlerRootView>
    </AppProvider>
  </NavigationContainer>
);

export default App;
