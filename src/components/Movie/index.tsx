import { FC } from "react";
import SmartImage from "../shared/SmartImage";
import { IMovie } from "./IMovie";
import "./styles.css";
const Movie: FC<IMovie.IProps> = ({
  poster_path,
  title,
  vote_count,
  release_date,
  vote_average,
  poster,
}) => {
  return (
    <article className="movie_wrapper">
      <SmartImage alt={title} imageFilePath={poster_path} fullPath={poster} />
      {title && <h2 className="movie_wrapper-title">{title}</h2>}{" "}
      {vote_average && (
        <p className="movie_wrapper-rate"> Rating :{vote_average}</p>
      )}
      {vote_count && (
        <p className="movie_wrapper-vote"> vote count : {vote_count} </p>
      )}
      {release_date && <p className="text-white">Date: {release_date}</p>}
    </article>
  );
};

export default Movie;
