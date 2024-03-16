import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';


const StaplesCorner = ({navigation}) => {
  const Corner = [
    {
      id: '1',
      img: require('../../assest/image/sunlite.png'),
      text: 'Poha',
      off: 'Upto 45% off',
    },
    {
      id: '2',
      img: require('../../assest/image/-original.png'),
      text: 'Other Pulses',
      off: 'Upto 45% off',
    },
    {
      id: '3',
      img: require('../../assest/image/physically.png'),
      text: 'Poha',
      off: 'Upto 45% off',
    },
    {
      id: '4',
      img: require('../../assest/image/sunlite.png'),
      text: 'Poha',
      off: 'Upto 45% off',
    },
    {
      id: '5',
      img: require('../../assest/image/-original.png'),
      text: 'Other Pulses',
      off: 'Upto 45% off',
    },
    {
      id: '6',
      img: require('../../assest/image/physically.png'),
      text: 'Poha',
      off: 'Upto 45% off',
    },
    {
      id: '7',
      img: require('../../assest/image/sunlite.png'),
      text: 'Poha',
      off: 'Upto 45% off',
    },
    {
      id: '8',
      img: require('../../assest/image/-original.png'),
      text: 'Other Pulses',
      off: 'Upto 45% off',
    },
    {
      id: '9',
      img: require('../../assest/image/physically.png'),
      text: 'Poha',
      off: 'Upto 45% off',
    },
    {
      id: '10',
      img: require('../../assest/image/sunlite.png'),
      text: 'Poha',
      off: 'Upto 45% off',
    },
  ];

  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <View
            style={{
              marginLeft: 15,
              flexDirection: 'row',
              width: 110,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assest/image/back.png')}
                style={styles.headerimg}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 20, color: 'black'}}>View All</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 80,
              marginRight: 15,
            }}>
            <TouchableOpacity>
         
             <Ionicons name='search-outline' size={26} color='black'/>

            </TouchableOpacity>
            <TouchableOpacity>
         
             <Ionicons name='cart-outline' size={26} color='black'/>

            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <FlatList
              // horizontal={true}
              numColumns={2}
              columnWrapperStyle={styles.row}
              data={Corner}
              renderItem={({item}) => (
                <View>
                  <View style={styles.box2}>
                    <Image
                      source={item.img}
                      style={{
                        height: 250,
                        width: 150,
                        marginHorizontal: 10,
                        marginVertical: 10,
                      }}
                    />
                    <View style={{marginLeft: 9, marginBottom: 5}}>
                      <Text style={{color: 'black', fontWeight: '500'}}>
                        {item.text}
                      </Text>
                      <Text
                        style={{
                          color: 'green',
                          fontSize: 17,
                          fontWeight: 'bold',
                        }}>
                        {item.off}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerimg: {
    height: 25,
    width: 25,
    // alignSelf:'center',
  },
  row: {
    //  flex: 1,
    justifyContent: 'space-around',
    marginTop: 2,
  },
  box2: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    // borderRadius: 9,,
    backgroundColor: 'white',
    padding: 12,
  },
});
export default StaplesCorner;
