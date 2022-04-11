import axios from 'axios';
import jsonServer from './jsonServer';

export const MoviesTheatresApi = async () => {
  let response = await jsonServer.get(
    '/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&primary_release_date.gte=2014-09-15&primary_release_date.lte=2022-10-22',
  );
  return response.data;
};

export const KidsMoviesApi = async () => {
  let response = await jsonServer.get(
    '/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&with_genres=18&certification_country=US&certification.lte=G&sort_by=popularity.desc',
  );
  return response.data;
};

export const DramaMoviesApi = async () => {
  let response = await jsonServer.get(
    '/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&primary_release_year=2015',
  );
  return response.data;
};
