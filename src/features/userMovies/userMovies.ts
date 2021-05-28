import { createSlice } from '@reduxjs/toolkit';

export interface IUserMovie {
  id: string;
  overview: string;
  poster: string;
  releaseDate: string;
  title: string;
}

export interface UserMoviesState {
  userMovies: IUserMovie[];
}

const initialState: UserMoviesState = {
  userMovies: []
};

export const userMoviesSlice = createSlice({
  name: 'userMovies',
  initialState,
  reducers: {
    addMovie(state, action) {
      state.userMovies.push(action.payload);
    }
  }
});

export const { addMovie } = userMoviesSlice.actions;
export default userMoviesSlice.reducer;
