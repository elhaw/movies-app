import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moviesSlice from '../features/movies/MoviesSlice';
import userMoviesSlice from '../features/userMovies/userMovies';
export const store = configureStore({
  reducer: {
    moviesCollection: moviesSlice,
    userMoviesCollection: userMoviesSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
