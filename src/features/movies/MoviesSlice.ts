import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMoviesList } from "../../api";
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
export interface MoviesState {
  status: "idle" | "loading" | "failed" | "sucess";
  movies: IMovie[];
  page: number;
  total_pages: number;
}

const initialState: MoviesState = {
  movies: [],
  page: 0,
  total_pages: 0,
  status: "idle",
};

export const getMoviesAsync = createAsyncThunk(
  "movies/fetchMovies",
  async (page: number) => {
    try {
      const response = await getMoviesList(page);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const moviesSlice = createSlice({
  name: "moviesList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getMoviesAsync.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(getMoviesAsync.fulfilled, (state, action) => {
        state.status = "sucess";
        state.movies = [...state.movies, ...action.payload.results];
        state.page = action.payload.page;
        state.total_pages = action.payload.total_pages;
      });
  },
});

export default moviesSlice.reducer;
