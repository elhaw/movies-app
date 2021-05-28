import "./App.css";
import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { getMoviesAsync } from "./features/movies/MoviesSlice";

import Movies from "./components/Movies";
import UserMovies from "./components/UserMovies";
import AddMovieForm from "./components/AddMovieForm";
function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMoviesAsync(1));
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <AddMovieForm />
            <h2>User Movies</h2>
            <UserMovies />
          </div>
          <div className="col-12">
            <div>
              <h2> Movies List</h2>
              <Movies />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
