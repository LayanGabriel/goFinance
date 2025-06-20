import React from 'react';

import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import { AppRoutes } from './src/Routes/app.routes';

import  AppLoading  from 'expo-app-loading'
import{
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts ({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_900Black,
  }) 

  if (!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
       <AppRoutes/>
       
       </NavigationContainer>
    </ThemeProvider>
   
  );
}
