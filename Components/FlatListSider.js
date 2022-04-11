import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const {width, height} = Dimensions.get('screen');

const FlatListSider = ({navigation, title, data, onPress = () => {}}) => {
  const Card = ({item}) => {
    return (
      <TouchableOpacity
        underlayColor={'white'}
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('InfoMovieScreen', item);
        }}>
        <View style={styles.card}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={
                item.poster_path
                  ? {
                      uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                    }
                  : require('../assets/placeholder.png')
              }
              style={{
                height: height * 0.2,
                width: width * 0.25,
                resizeMode: 'stretch',
                borderRadius: 5,
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 11,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 10,
            }}>
            {item.original_title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
          {title}
        </Text>
      </View>

      <FlatList
        onEndReachedThreshold={0.01}
        scrollEventThrottle={0}
        horizontal={true}
        bounces={false}
        windowSize={5}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        data={data}
        renderItem={({item, index}) => {
          return <Card item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: height * 0.2,
    width: width * 0.25,
    margin: 10,
    marginBottom: 60,

    borderRadius: 20,
    elevation: 13,
    backgroundColor: 'grey',
  },
});

export {FlatListSider};

//
