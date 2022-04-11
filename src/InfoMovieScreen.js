import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Foundation';

const {width, height} = Dimensions.get('screen');

const InfoMovieScreen = ({navigation, route}) => {
  const item = route.params;
  console.log(item);
  return (
    <View style={{justifyContent: 'space-between'}}>
      <ImageBackground
        source={
          item.poster_path
            ? {
                uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
              }
            : require('../assets/placeholder.png')
        }
        resizeMode="stretch"
        style={{
          height: height * 0.7,
        }}>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{
                marginTop: height * 0.07,
                marginRight: 30,
                backgroundColor: 'white',
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Icon1 name="x" size={21} color={'black'} />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={style.details}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <Icon name="star-rate" color="gold" size={30} />

          <Text
            style={{
              fontSize: 21,
              fontWeight: '600',
              color: 'white',
              marginLeft: 15,
            }}>
            {item.vote_average} / 10
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
            {item.original_title}
          </Text>
        </View>
        <ScrollView
          style={{
            height: height * 0.1,
            marginBottom: 75,
          }}>
          <View>
            <Text style={style.detailsText}>{item.overview}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 30,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    height: height * 0.3,
    paddingHorizontal: 10,
    paddingTop: 20,

    backgroundColor: '#191a1b',
  },
  iconContainer: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: 'white',
    flexWrap: 'wrap',
  },
});

export default InfoMovieScreen;
