import React, {useContext} from 'react';
import {Context} from '../context/MovieContext';
import MovieForm from '../Components/MovieForm';

const EditScreen = ({navigation, route}) => {
  const id = route.params.id;
  const {state, editMovieList} = useContext(Context);
  const moviePost = state.find(moviePost => moviePost.id === id);

  return (
    <MovieForm
      nameScreen={'Edit Movie Post'}
      navigation={navigation}
      initialValues={{
        title: moviePost.title,
        overview: moviePost.overview,
        date: moviePost.date,
        url: moviePost.url,
      }}
      onSubmit={(title, overview, date, url) => {
        editMovieList(id, title, overview, date, url, () => navigation.pop());
      }}
    />
  );
};

export default EditScreen;
