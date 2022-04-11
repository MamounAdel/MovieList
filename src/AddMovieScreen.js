import React, {useContext} from 'react';
import {Context} from '../context/MovieContext';
import MovieForm from '../Components/MovieForm';
const AddMovieScreen = ({navigation}) => {
  const {addMovieList} = useContext(Context);
  return (
    <MovieForm
      nameScreen={'Create Movie Post'}
      navigation={navigation}
      onSubmit={(title, overview, date, url) => {
        addMovieList(title, overview, date, url, () =>
          navigation.navigate('SplashScreen'),
        );
      }}
    />
  );
};

export default AddMovieScreen;
