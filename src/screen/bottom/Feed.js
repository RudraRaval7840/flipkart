import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Feed = () => {
  const [post , setPost] = useState ([
    {
      id: '1',
      profile: require('../../assest/feed/download.png'),
      userName: 'rudra',
      post: require('../../assest/feed/FE4E1509-6C1A-4242-A861-022A7F740ACB.png'),
      like: '100',
      likes: '  Likes',
    },
    {
      id: '2',
      profile: require('../../assest/feed/download.png'),
      userName: 'akshay_0001',
      post: require('../../assest/feed/photo-1508921912186-1d1a45ebb3c1.png'),
      like: '200',
      likes: '  Likes',
    },
    {
      id: '3',
      profile: require('../../assest/feed/download.png'),
      userName: 'v.v.patel',
      post: require('../../assest/feed/2B9FC9C6-F71C-4058-963E-0F33F3B5A238.png'),
      like: '250',
      likes: '  Likes',
    },
    {
      id: '4',
      profile: require('../../assest/feed/download.png'),
      userName: 'sk_patel',
      post: require('../../assest/feed/c.png'),
      like: '270',
      likes: '  Likes',
    },
    {
      id: '5',
      profile: require('../../assest/feed/download.png'),
      userName: 'viku_patel',
      post: require('../../assest/feed/541FE640-E020-49C0-8EAC-89F6387DF8A5.png'),
      like: '900',
      likes: '  Likes',
    },
  ])

  const RePost = [
    {
      id: '11',
      profile: require('../../assest/feed/download.png'),
      userName: '12334',
      post: require('../../assest/feed/Photo---.png'),
      like: '100',
      likes: '  Likes',
    },
    {
      id: '12',
      profile: require('../../assest/feed/download.png'),
      userName: '222222',
      post: require('../../assest/feed/72E205F7-7400-4F65-ADFC-A6DDA5DC3B94.png'),
      like: '200',
      likes: '  Likes',
    },
    {
      id: '13',
      profile: require('../../assest/feed/download.png'),
      userName: '333333',
      post: require('../../assest/feed/download.png'),
      like: '250',
      likes: '  Likes',
    },
    {
      id: '14',
      profile: require('../../assest/feed/download.png'),
      userName: '444444',
      post: require('../../assest/feed/AE15FC7F-D514-42AF-B065-DFA99DAA451B.png'),
      like: '270',
      likes: '  Likes',
    },
    {
      id: '15',
      profile: require('../../assest/feed/541FE640-E020-49C0-8EAC-89F6387DF8A5.png'),
      userName: 'GJ27DB5484',
      post: require('../../assest/feed/BE905109-19C9-4552-BB3E-FFE68BBC0F05.png'),
      like: '821',
      likes: '  Likes',
    },
  ];

  const [data, setData] = useState([false, false, false, false, false]);

  const onSelect = ind => {
    setData(prevData => {
      const newData = [...prevData];
      newData[ind] = !newData[ind];
      return newData;
    });
  };

  const handleAddButtonPress = () => {
    setPost(prevPost => [...prevPost, ...RePost]);
    setData(prevData => [...prevData, false, false, false, false, false]);
  };

  const [save, setSave] = useState([false, false, false, false, false]);

  const onSave = ind => {
    setSave(prevData => {
      const newData = [...prevData];
      newData[ind] = !newData[ind];
      return newData;
    });
  };

  const handleAddButtonPresssave = () => {
    setPost(prevPost => [...prevPost, ...RePost]);
    setSave(prevData => [...prevData, false, false, false, false, false]);
  };
  
  
  return (
    <View style={{backgroundColor:'white'}}>
      <ScrollView>
        <FlatList
          data={post}
          renderItem={({item, index}) => (
            <View>
              <View style={styles.header}>
                <View style={styles.headerView}>
                  <Image source={item.profile} style={styles.profile} />
                  <Text style={styles.userName}>{item.userName}</Text>
                </View>
                <View style={{alignSelf: 'center', marginRight: 5}}>
                  <Ionicons name="ellipsis-vertical" size={27} />
                </View>
              </View>
              <View style={{height: 500, width: 400}}>
                <Image source={item.post} style={styles.post} />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.lcs}>
                  <TouchableOpacity
                    onPress={() => {
                      onSelect(index);
                    }}>
                    {data[index] ? (
                      <Ionicons name="heart-sharp" color="red" size={30} />
                    ) : (
                      <Ionicons name="heart-outline" color="black" size={30} />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image source={require('../../assest/feed/chat.png')} style={{height:25,width:25,}}/>

                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image />
                  </TouchableOpacity>
                </View>
                <View style={{alignSelf: 'center'}}>
                <TouchableOpacity
                    onPress={() => {
                      onSave(index);
                    }}>
                    {save[index] ? (
                      <Image source={require('../../assest/feed/bookmark.png')} style={{height:25,width:25,marginRight:5}}/>
                    ) : (
                      <Image source={require('../../assest/feed/save-instagram.png')} style={{height:25,width:25,marginRight:5}}/>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{marginLeft: 10, fontSize: 18, color: 'black'}}>
                  {item.like}
                </Text>
                <Text style={{fontSize: 18, color: 'black'}}>{item.likes}</Text>
              </View>
              <View style={{height: 20}}></View>
            </View>
          )}
        />
        <View style={{alignSelf: 'center', marginBottom: 20}}>
          <TouchableOpacity onPress={handleAddButtonPress}>
            <Text style={{fontSize: 17, color: 'blue'}}>Load Data</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
  },
  headerView: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 50,
    alignSelf: 'center',
    marginLeft: 10,
  },
  userName: {
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 20,
    color:'black'
  },
  post: {
    height: '100%',
    width: '100%',
  },

  lcs: {
    flexDirection: 'row',
    // backgroundColor:'white',
    width: 130,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  loadData: {
    alignSelf: 'center',
    marginBottom: 20,
    fontSize: 25,
  },
});

export default Feed;
