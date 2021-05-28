interface IMovie {
  adult: boolean;
  backdrop_path: string;
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
declare namespace IMovies {
  export interface IProps {
    movies: Array<IMovie>;
  }
}

export { IMovies };
