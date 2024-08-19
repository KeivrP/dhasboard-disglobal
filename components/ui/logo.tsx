import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export const ImageLogo = () => {
  return (
    <View style={styles.container}>
      <Image     
        source={require('../../assets/images/logo-disglobal.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  }
});
