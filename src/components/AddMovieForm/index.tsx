import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useInput from "../../hooks/InputHook";

import { addMovie } from "../../features/userMovies/userMovies";
import { useAppDispatch } from "../../app/hooks";
import getBase64 from "../../utils/getBase64";
const AddMovieForm = () => {
  const dispatch = useAppDispatch();
  const [imageFile, setImageFile] = useState("");
  const [poster, setPoster] = useState("");
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput("");
  const {
    value: releaseDate,
    bind: bindReleaseDate,
    reset: resetReleaseDate,
  } = useInput("");
  const {
    value: overview,
    bind: bindOverview,
    reset: resetOverview,
  } = useInput("");

  const handleImageUpload = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImageFile(e.currentTarget.value);
    if (file) {
      getBase64(file).then((base64) => {
        setPoster(base64 as string);
      });
    } else {
      alert("File uploaded is not valid.");
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title,
      releaseDate,
      overview,
      id: uuidv4(),
      poster,
    };
    dispatch(addMovie(payload));
    resetTitle();
    resetReleaseDate();
    resetOverview();
    setImageFile("");
    setPoster("");
  };

  return (
    <>
      <h2>add movies</h2>
      <form
        className="bg-black m-2 p-2"
        id="addMovieForm"
        name="addMovieForm"
        onSubmit={handleSubmit}
      >
        <label className=" flex flex-column text-white text-left mb-1 ">
          Title:
          <input type="text" {...bindTitle} name="title" required />
        </label>
        <label className=" flex flex-column  text-white text-left mb-1 ">
          Release Date:
          <input type="date" {...bindReleaseDate} name="releaseDate" required />
        </label>

        <label className=" flex flex-column text-white text-left mb-1 ">
          OverView:
          <input type="text" {...bindOverview} name="overview" required />
        </label>
        <label className=" flex flex-column text-white text-left mb-1 ">
          Poster (Optional):
          <input
            type="file"
            value={imageFile}
            onChange={handleImageUpload}
            name="poster"
          />
        </label>

        <input type="submit" value="addMovie" />
      </form>
    </>
  );
};

export default AddMovieForm;
