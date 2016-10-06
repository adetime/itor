import React from 'react';
import { View, Text, Image } from 'react-native';
import { Header, BackgroundImage } from './components/common';
// require de imagens estáticas tem que ser feito fora da função

const fundo = require('./assets/bg.jpg');
const overlay = require('./assets/helloImage.jpg');

const App = () => {
  const { textStyle, imageStyle, containerStyle } = style;
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='Hot Welcome' />
        <BackgroundImage source={fundo}>
          <View style={containerStyle} >
            <Image source={overlay} style={imageStyle} />
            <Text style={textStyle}> World! </Text>
            <View
              style={{ flex: 1,
              flexDirection: 'column',
              width: null,
              height: 50 }}
            />

            <View
              style={{
              width: null,
              height: 50,
              backgroundColor: 'red' }}
            />
          </View>
        </BackgroundImage>
      </View>
    );
};


const style = {
  containerStyle: {
    flex: 1,
    opacity: 0.5,
    backgroundColor: '#000000',
    flexDirection: 'column',
    justifyContent: 'center'

  },
  textStyle: {
    fontSize: 120,
    color: 'red',
    alignSelf: 'center'
  },
  imageStyle: {
    flex: 1,
    height: 80,
    width: null


  }
};
//contentJustify: 'center',

export default App;
