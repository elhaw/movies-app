import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "../../app/hooks";

import UserMovie from "../Movie";

const UserMovies = () => {
  const { userMovies } = useAppSelector((state) => state.userMoviesCollection);

  return (
    <>
      {userMovies.length >= 1 ? (
        <div className="movies_wrapper">
          {userMovies.map(({ overview, title, id, poster, releaseDate }) => {
            return (
              <UserMovie
                key={uuidv4()}
                poster={poster ? poster : "https://via.placeholder.com/150"}
                overview={overview}
                title={title}
                id={id}
                release_date={releaseDate}
              />
            );
          })}
        </div>
      ) : (
        <p>Click on AddMovie to Add a new movie</p>
      )}
    </>
  );
};

export default UserMovies;
