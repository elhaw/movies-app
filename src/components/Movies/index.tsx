import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getMoviesAsync } from '../../features/movies/MoviesSlice';

// import { IMovies } from './IMovies';
import Movie from '../Movie';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movies:FC = () => {
  const dispatch = useAppDispatch();
  const {
    movies,
    page: currentPage
  } = useAppSelector(state => state.moviesCollection);

  const handleScroll = () => dispatch(getMoviesAsync(currentPage + 1));

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={handleScroll}
      hasMore={true}
      className="movies_wrapper"
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {movies.map(
        ({
          original_title,
          poster_path,
          overview,
          title,
          vote_count,
          adult,
          backdrop_path,
          id,
          original_language,
          popularity,
          release_date,
          video,
          vote_average
        }) => {

          return (
            <Movie
              key={id}
              original_title={original_title}
              poster_path={poster_path}
              overview={overview}
              title={title}
              vote_count={vote_count}
              adult={adult}
              backdrop_path={backdrop_path}
              id={id}
              original_language={original_language}
              popularity={popularity}
              release_date={release_date}
              video={video}
              vote_average={vote_average}
            />
          );
        }
      )}
    </InfiniteScroll>
  );
};

export default Movies;
