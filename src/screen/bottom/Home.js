import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Basmati from '../Navigation/Basmati';

const Home = ({navigation}) => {
  const Grocery = [
    {
      id: '13',
      name: 'Toor,Urad & \n other Dals',
      dicount: 'up to 40% off',
      img: require('../../assest/image/main.png'),
    },
    {
      id: '2',
      dicount: 'up to 40% off',
      name: 'Massor,Rajma \n& other Pulses ',
      img: require('../../assest/image/main.png'),
    },
    {
      id: '3',
      dicount: 'up to 30% off',
      name: 'Poha & \nPuffed Rise',
      img: require('../../assest/image/main.png'),
    },
    {
      id: '4',
      dicount: 'up to 30% off',
      name: 'Soya \nChunks ',
      img: require('../../assest/image/main.png'),
    },
  ];

  const Atta = [
    {
      id: '1',
      name: 'Daawat Rozana Super\nBasmati Rice',
      dicount: '40% off',
      KG: '1 kg',
      img: require('../../assest/image/abc.png'),
      MRP: '98',
      OMRP: '$36',
      Price: 'MRP',
    },
    {
      id: '2',
      name: 'Daawat Rozana Super\nBasmati Rice',
      dicount: '40% off',
      KG: '1 kg',
      img: require('../../assest/image/atta.png'),
      MRP: '98',
      OMRP: '$76',
      Price: 'MRP',
    },
    {
      id: '3',
      name: 'Daawat Rozana Super\nBasmati Rice',
      dicount: '40% off',
      KG: '1 kg',
      img: require('../../assest/image/suji-removebg-preview.png'),
      MRP: '98',
      OMRP: '$15',
      Price: 'MRP',
    },
    {
      id: '4',
      name: 'Daawat Rozana Super\nBasmati Rice',
      dicount: '40% off',
      KG: '1 kg',
      img: require('../../assest/image/abc.png'),
      MRP: '98',
      OMRP: '$79',
      Price: 'MRP',
    },
    {
      id: '5',
      name: 'Daawat Rozana Super\nBasmati Rice',
      dicount: '40% off',
      KG: '1 kg',
      img: require('../../assest/image/atta.png'),
      MRP: '98',
      OMRP: '$44',
      Price: 'MRP',
    },
    {
      id: '6',
      name: 'Daawat Rozana Super\nBasmati Rice',
      dicount: '40% off',
      KG: '1 kg',
      img: require('../../assest/image/suji-removebg-preview.png'),
      MRP: '98',
      OMRP: '$90',
      Price: 'MRP',
    },
  ];

  const circle = [
    {
      id: '1',
      img: require('../../assest/image/suji-removebg-preview.png'),
      text: 'Poha',
      off: 'Upto 45% off',
    },
    {
      id: '2',
      img: require('../../assest/image/suji-removebg-preview.png'),
      text: 'Other Pulses',
      off: 'Upto 45% off',
    },
  ];

  const Collection = [
    {
      id: '1',
      img: require('../../assest/image/Fortune-removebg-preview.png'),
    },
    {
      id: '2',
      img: require('../../assest/image/daavat.png'),
    },
    {
      id: '3',
      img: require('../../assest/image/aashirvaad.png'),
    },
    {
      id: '4',
      img: require('../../assest/image/Himalayan.png'),
    },
    {
      id: '5',
      img: require('../../assest/image/indiagate.png'),
    },
    {
      id: '6',
      img: require('../../assest/image/flipcart.png'),
    },
  ];
  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        {/* One */}
        <View style={{width: '100%', justifyContent: 'space-around'}}>
          <FlatList
            horizontal={true}
            data={Grocery}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Image source={item.img} style={styles.images} />
                <Text style={styles.textd}>{item.dicount}</Text>
                <Text style={styles.text}>{item.name}</Text>
                {/* <Text style={styles.text}>{item.id}</Text> */}
              </View>
            )}
          />
        </View>
        <View style={{marginLeft: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // backgroundColor: 'green',
              marginVertical: 20,
            }}>
            <View style={{}}>
              <Text style={{fontSize: 20, color: 'black'}}>Basmati rice</Text>
              <Text style={{fontSize: 16}}>
                From the best barnd to your plate
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity
                onPressIn={() => {
                  navigation.navigate('Basmati');
                }}>
                <Text style={styles.header2}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Two  */}

          <View style={{backgroundColor: 'white'}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={Atta}
              renderItem={({item}) => (
                <View
                  style={{
                    //
                    borderWidth: 1,
                    marginHorizontal: 4,
                    borderRadius: 5,
                    width: 160,
                  }}>
                  <Image source={item.img} style={styles.images2} />
                  <Text style={styles.dtext}>{item.dicount}</Text>
                  <Text style={styles.textd2}>{item.name}</Text>
                  <Text style={styles.KG2}>{item.KG}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 5,
                      marginVertical: 5,
                      alignItems: 'center',
                    }}>
                    <Text style={styles.Price2}>{item.Price}</Text>
                    <Text style={styles.mrp2}>{item.MRP}</Text>
                    <Text style={styles.omrp2}>{item.OMRP}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 20,
                    }}>
                    <Text style={styles.btnText}>Add</Text>
                    <TouchableOpacity
                      style={{
                        height: 40,
                        width: 40,
                        borderWidth: 1,
                        alignSelf: 'center',
                        borderColor: '#2a73e8',
                      }}>
                      <Text
                        style={{
                          fontSize: 30,
                          textAlign: 'center',
                          textAlignVertical: 'center',
                          color: '#2a73e8',
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        <View
          style={{height: 1.5, backgroundColor: 'gray', marginTop: 30}}></View>
        {/* Three */}
        <View style={{marginLeft: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // backgroundColor: 'green',
              marginVertical: 20,
            }}>
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                }}>
                Fast Selling Fodgrains
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity
                onPressIn={() => {
                  navigation.navigate('Grocery');
                }}>
                <Text style={styles.header2}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{backgroundColor: 'white'}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={Atta}
              renderItem={({item}) => (
                <View
                  style={{
                    borderWidth: 1,
                    marginHorizontal: 4,
                    borderRadius: 5,
                    height: 310,
                    width: 160,
                    // backgroundColor:'red'
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }}>
                  <Image source={item.img} style={styles.images2} />
                  <Text style={styles.dtext}>{item.dicount}</Text>
                  <Text style={styles.textd2}>{item.name}</Text>
                  <Text style={styles.KG2}>{item.KG}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 5,
                      marginVertical: 5,
                      // backgroundColor: 'red',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.Price2}>{item.Price}</Text>
                    <Text style={styles.mrp2}>{item.MRP}</Text>
                    <Text style={styles.omrp2}>{item.OMRP}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.btnText}>Add</Text>
                    <TouchableOpacity
                      style={{
                        height: 40,
                        width: 40,
                        borderWidth: 1,
                        alignSelf: 'center',
                        borderColor: '#2a73e8',
                      }}>
                      <Text
                        style={{
                          fontSize: 30,
                          textAlign: 'center',
                          textAlignVertical: 'center',
                          color: '#2a73e8',
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        <View
          style={{height: 1.5, backgroundColor: 'gray', marginTop: 30}}></View>

        {/* Four */}

        <View style={{marginLeft: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // backgroundColor: 'green',
              marginVertical: 20,
            }}>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 20, color: 'black'}}>
                Top Offers to Grab
              </Text>
              <Text style={{fontSize: 16}}>Quick Grabs</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity
                onPressIn={() => {
                  navigation.navigate('Grocery');
                }}>
                <Text style={styles.header2}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{backgroundColor: 'white', 
                   }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={Atta}
              renderItem={({item}) => (
                <View
                  style={{
                    // borderWidth: 0.6,
                    marginHorizontal: 4,
                    // borderRadius: 5,
                    // height: 310,
                    width: 160,
                    // backgroundColor:'red'
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 9.51,
                    
                    elevation: 2,
                    margin:5
                  }}>
                  <Image source={item.img} style={styles.images2} />
                  <Text style={styles.dtext}>{item.dicount}</Text>
                  <Text style={styles.textd2}>{item.name}</Text>
                  <Text style={styles.KG2}>{item.KG}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 5,
                      marginVertical: 5,
                      // backgroundColor: 'red',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.Price2}>{item.Price}</Text>
                    <Text style={styles.mrp2}>{item.MRP}</Text>
                    <Text style={styles.omrp2}>{item.OMRP}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 20,
                    }}>
                    <Text style={styles.btnText}>Add</Text>
                    <TouchableOpacity
                      style={{
                        height: 40,
                        width: 40,
                        borderWidth: 1,
                        alignSelf: 'center',
                        borderColor: '#2a73e8',
                      }}>
                      <Text
                        style={{
                          fontSize: 30,
                          textAlign: 'center',
                          textAlignVertical: 'center',
                          color: '#2a73e8',
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        <Image
          source={require('../../assest/image/Vector14.png')}
          style={{height: 3, marginTop: 30}}
        />
        <View style={{marginLeft: 15, marginVertical: 20}}>
          <Text style={{fontSize: 20, color: 'black'}}>
            Deals Curated just for You
          </Text>
          <Text style={{fontSize: 14}}>special Picks, Special Prices</Text>
        </View>
        <View style={{marginLeft: 15}}>
          <Text style={{fontSize: 20, color: 'black'}}>
            Special Store to Explore
          </Text>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#AAF2A8',
                borderRadius: 3,
                height: 20,
              }}>
              <Image
                source={require('../../assest/image/checkmark.png')}
                style={{height: 20, width: 20}}
              />
              <Text
                style={{
                  fontSize: 13,
                  width: 140,
                  textAlign: 'center',
                }}>
                100% Genuine product
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#AAF2A8',
                marginLeft: 8,
                borderRadius: 3,
                height: 20,
              }}>
              <Image
                source={require('../../assest/image/checkmark.png')}
                style={{height: 20, width: 20}}
              />
              <Text
                style={{
                  fontSize: 13,
                  width: 90,
                  textAlign: 'center',
                }}>
                Lowest Price
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, color: 'black'}}>Staples Corner</Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                backgroundColor: 'blue',
                borderRadius: 20,
                marginRight: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('StaplesCorner');
              }}>
              <Image source={require('../../assest/image/right-arrow.png')} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Forth FlatList */}

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <FlatList
            // horizontal={true}
            numColumns={2}
            columnWrapperStyle={styles.row}
            data={circle}
            renderItem={({item}) => (
              <View>
                <View style={styles.box2}>
                  <Image
                    source={item.img}
                    style={{
                      height: 190,
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

        <View style={{marginVertical: 20, marginLeft: 20}}>
          <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
            Top Brands Collection
          </Text>
          <Text style={{fontWeight: '500', fontSize: 15}}>
            Find Your Favourites here!
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <FlatList
            // horizontal={true}
            numColumns={3}
            columnWrapperStyle={styles.row}
            data={Collection}
            renderItem={({item}) => (
              <View>
                <View style={styles.brands}>
                  <Image
                    source={item.img}
                    style={{
                      height: 60,
                      width: 100,
                      marginHorizontal: 10,
                      marginVertical: 10,
                      alignSelf: 'center',
                      // borderWidth:1
                    }}
                  />
                </View>
              </View>
            )}
          />
        </View>
        {/* <View style={{marginBottom: 100}}></View> */}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 6,
  },
  textd: {
    fontSize: 12,
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    backgroundColor: 'rgba(255,197,0,255)',
    color: 'black',
    fontWeight: '600',
    marginTop: 45,
  },
  images: {
    height: 60,
    width: 60,
    position: 'absolute',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
    // marginTop:35
  },
  header2: {
    // padding:3,
    borderWidth: 1,
    height: 40,
    width: 80,
    marginRight: 4,
    alignContent: 'center',
    backgroundColor: 'rgba(39,116,238,255)',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    borderRadius: 7,
    fontWeight: '500',
    textAlignVertical: 'center',
  },
  //FlatList 2
  images2: {
    height: 120,
    width: 100,
    marginVertical: 20,
    // position: 'absolute',
    alignSelf: 'center',
    // alignSelf:'center',
  },
  dtext: {
    backgroundColor: '#28a445',
    padding: 2,
    width: 60,
    position: 'absolute',
    marginTop: 10,
  },
  textd2: {
    color: 'black',
    fontSize: 14,
    marginLeft: 5,
  },
  KG2: {
    fontSize: 15,
    marginLeft: 5,
  },
  omrp2: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
    fontSize: 20,
    textAlign: 'center',
  },
  Price2: {
    textAlign: 'center',
    fontSize: 15,
  },
  mrp2: {
    textAlign: 'center',
    fontSize: 15,
    textDecorationLine: 'line-through',
    marginLeft: 4,
  },
  btnText: {
    color: '#2a73e8',
    height: 40,
    width: 90,
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    marginLeft: 15,
    borderColor: '#2a73e8',
  },
  // bag offers
  box2: {
    // borderWidth: 1, 
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: 'white',
  },
  row: {
    //  flex: 1,
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  //brands

  brands: {
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(254,244,207,255)',
  },
});
export default Home;
