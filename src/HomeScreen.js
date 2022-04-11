import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
//import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  MoviesTheatresApi,
  KidsMoviesApi,
  DramaMoviesApi,
} from '../api/moviesApi';
import {FlatListSider} from '../Components/FlatListSider';
const {width, height} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  // const edges = useSafeAreaInsets();
  const [moviesTheatres, setMoviesTheatres] = useState();
  const [kidsMovies, setKidsMovies] = useState();
  const [dramaMovies, setDramaMovies] = useState();

  const [loading, setLoading] = useState(true);
  const loadMovies = async () => {
    setLoading(true);
    try {
      MoviesTheatresApi().then(response => setMoviesTheatres(response.results));
      KidsMoviesApi().then(response => setKidsMovies(response.results));
      DramaMoviesApi().then(response => setDramaMovies(response.results));
    } catch (error) {
      throw error;
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    loadMovies();
  }, []);

  // console.log(movies);
  if (loading == true) {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#191a1b'}}>
        <View
          style={{
            paddingTop: height * 0.5,
          }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#191a1b'}}>
        <View style={{paddingTop: height * 0.13}}>
          <ScrollView>
            <FlatListSider
              navigation={navigation}
              title={'Movies are in theatres'}
              data={moviesTheatres}
            />
            <FlatListSider
              navigation={navigation}
              title={'The most popular kids movies'}
              data={kidsMovies}
            />
            <FlatListSider
              navigation={navigation}
              title={"the best drama's"}
              data={dramaMovies}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({});

export default HomeScreen;
