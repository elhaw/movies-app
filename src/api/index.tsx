import Axios from './axios';
const getMoviesList = async (page: number) => {
  try {
    const resp = await Axios.get(`/3/movie/top_rated?page=${page}`);
    return resp;
  } catch (error) {
    return error;
  }
};

export { getMoviesList };
