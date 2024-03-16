import {View, Text, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  // const [selectedImage, setSelectedImage] = useState('');
  const [image, setImage] = useState('');
  console.log({image});
  const getimage = async () => {
    AsyncStorage.getItem('image')
      .then(data => {
        setImage(data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getimage();
  }, []);

  return (
    <View>
      
      <View style={{alignSelf:'center',marginTop:10}}>
      <Image 
      // source={require("../../assest/image/user.png")}
      source={{uri: image}}
       style={{height:150,width:150,borderRadius:100}}/>
      </View>
    </View>
  );
};

export default Profile;
