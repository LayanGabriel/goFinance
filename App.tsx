import React from 'react';
<<<<<<< HEAD
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
=======

import {ThemeProvider} from 'styled-components';
>>>>>>> de2389da16985d982dcda18469ae88c41674069e
import theme from './src/global/styles/theme';
import { AppRoutes } from './src/Routes/app.routes';


import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';

import { NavigationContainer } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
<<<<<<< HEAD
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
=======
    <ThemeProvider theme={theme}>
      <NavigationContainer>
       <AppRoutes/>
       
       </NavigationContainer>
    </ThemeProvider>
   
>>>>>>> de2389da16985d982dcda18469ae88c41674069e
  );
}