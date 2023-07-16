import { api, apiSearc } from "../Api/api";
import Header from "../Components/Header";
import { useState, useEffect } from "react";
import Scop from "../Components/Scop.jsx";

function login(props) {
  const [Film, setFilm] = useState();
  const [searchFilms, setSearchFilms] = useState([]);

  const getSearch = (searchBt) => {
    setFilm(searchBt);
    /* 
    console.log(searchBtn); */
  };

  const clkSearch = () => {
    apiSearc
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=e68b6243bee88c674c06b447bb15c094&language=pt-BR&query=" +
          Film
      )
      .then((response) => setSearchFilms(response.data.results))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  useEffect(() => {
    api
      .get(
        "upcoming?page=1&api_key=e68b6243bee88c674c06b447bb15c094&language=pt-BR"
      )
      .then((response) => setSearchFilms(response.data.results))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  /* 
  console.log(Film.title); */
  return (
    <div className="App">
      <Scop Film={Film} searchFilms={searchFilms} />
      {/* <Login /> */}
    </div>
  );
}

export default login;
