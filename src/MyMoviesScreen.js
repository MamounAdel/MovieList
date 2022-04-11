import React, {useEffect, useState, useContext} from 'react';
import {
  Text,
  Dimensions,
  Image,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
//import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Context} from '../context/MovieContext';
import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('screen');

const MyMoviesScreen = ({navigation}) => {
  const {state, deleteMovieList} = useContext(Context);

  //const edges = useSafeAreaInsets();

  const renderItem = ({item}) => (
    <View style={{flexDirection: 'row'}}>
      <View
        key={item.key}
        style={{
          marginLeft: 10,
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'space-between',
        }}>
        <View>
          <Image
            source={{
              uri: item.url,
            }}
            style={{
              height: height * 0.2,
              width: width * 0.25,
              resizeMode: 'stretch',
              borderRadius: 5,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 21,
              fontWeight: '600',
              margin: 5,
              width: width * 0.6,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 12,
              fontWeight: '600',
              margin: 5,
              width: width * 0.6,
              lineHeight: 18,
              flexWrap: 'wrap',
            }}>
            {item.overview}
          </Text>
          <Text
            style={{
              alignItems: 'flex-end',
              color: 'grey',
              fontSize: 11,
              fontWeight: '400',
              margin: 5,
              width: width * 0.3,
            }}>
            {item.date.toString()}
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          onPress={() => {
            deleteMovieList(item.id);
          }}>
          <Icon style={{color: 'white'}} name="trash" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditMovieScreen', {id: item.id})}>
          <Image
            source={require('../assets/edit.png')}
            style={{
              resizeMode: 'stretch',
              height: height * 0.025,
              width: width * 0.06,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#191a1b'}}>
      {state.length == 0 ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View stlye={{}}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
              {' '}
              There's no Movies added.
            </Text>
          </View>
        </View>
      ) : (
        <View style={{marginTop: height * 0.1}}>
          <View style={{alignItems: 'flex-start', marginLeft: 5}}>
            <Text style={{color: 'white', fontSize: 21, fontWeight: '700'}}>
              My Movies :{' '}
            </Text>
          </View>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: 'center',
              }}
              data={state}
              renderItem={renderItem}
            />
          </View>
        </View>
      )}
      <FAB
        style={styles.fab}
        medium
        icon="plus"
        onPress={() => navigation.navigate('AddMovieScreen')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: height * 0.3,
    width: width * 0.4,
    margin: 15,

    borderRadius: 20,
    elevation: 13,
    backgroundColor: 'grey',
  },
  fab: {
    position: 'absolute',
    margin: 25,
    right: 0,
    bottom: 0,
  },
});

export default MyMoviesScreen;
