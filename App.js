import React, { useCallback, useEffect, useState } from 'react';

import Navigator from './Routing/drawer';

import * as Font from 'expo-font';
import { View, Text } from 'react-native';
import globalStyles from './style';

const styles = globalStyles;

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  // Get Resources
  useEffect( () => {
    const getFonts = async () => {
      const fontsPath = './assets/fonts/';
      const fontFolder = fontsPath + 'Ubuntu/';
      
      try {
        await Font.loadAsync({
          'ubuntu-bold': require(`${fontFolder}Ubuntu-Bold.ttf`),
          'ubuntu-bold-italic': require(`${fontFolder}Ubuntu-BoldItalic.ttf`),
          'ubuntu-medium': require(`${fontFolder}Ubuntu-Medium.ttf`),
          'ubuntu-medium-italic': require(`${fontFolder}Ubuntu-MediumItalic.ttf`),
          'ubuntu-regular': require(`${fontFolder}Ubuntu-Regular.ttf`),
          'ubuntu-italic': require(`${fontFolder}Ubuntu-Italic.ttf`)
        });
  
        await new Promise(resolve => setTimeout(resolve, 2000));  
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    };

    getFonts();
  }, [] );

  // Display loading screen if not loaded
  if (!fontsLoaded) {
    return (
      <View
      style={styles.loadingScreenContainer}>
        <Text> Loading... </Text>
      </View>
    );
  }

  // Display app if loaded
  return (
    <>
      <Navigator />
      {/* <View style={{
        // flex: 1,
        backgroundColor: '#0bbfe1',
        height: 80
      }}>

      </View> */}
    </>
  );
}
