import React from 'react';
import { Image } from 'react-native';

const BackgroundImage = ({ source, children }) => {
  return (
    <Image source={source} style={styles.containerStyle}>
      {children}
    </Image>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor: 'transparent',

  }
};
export { BackgroundImage };
