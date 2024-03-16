// ReelItem.js
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const ReelItem = ({item}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.img}
        style={styles.backgroundImage}></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"red"
  },
  backgroundImage: {
  //  flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default ReelItem;
