import createDataContext from './createDataContext';

const MovieReducer = (state, action) => {
  switch (action.type) {
    case 'edit_movielist':
      return state.map(movieList => {
        return movieList.id === action.payload.id ? action.payload : movieList;
      });
    case 'delete_movielist':
      return state.filter(movieList => movieList.id !== action.payload);

    case 'add_movielist':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          overview: action.payload.overview,
          date: action.payload.date,
          url: action.payload.url,
        },
      ];
    default:
      return state;
  }
};

const addMovieList = dispatch => {
  return (title, overview, date, url, callback) => {
    dispatch({type: 'add_movielist', payload: {title, overview, date, url}});
    if (callback) {
      callback();
    }
  };
};

const deleteMovieList = dispatch => {
  return id => {
    dispatch({type: 'delete_movielist', payload: id});
  };
};

const editMovieList = dispatch => {
  return (id, title, overview, date, url, callback) => {
    dispatch({
      type: 'edit_movielist',
      payload: {id, title, overview, date, url},
    });
    if (callback) {
      callback();
    }
  };
};

export const {Context, Provider} = createDataContext(
  MovieReducer,
  {addMovieList, deleteMovieList, editMovieList},
  [],
);
