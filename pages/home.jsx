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
    if (searchFilms != undefined && Film) {
      apiSearc
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=e68b6243bee88c674c06b447bb15c094&language=pt-BR&query=" +
            Film
        )
        .then((response) => setSearchFilms(response.data.results))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }
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
      <Header getSearch={getSearch} clkSearch={clkSearch} />
      {searchFilms.length > 0 ? <Scop Film={Film} searchFilms={searchFilms} /> : <><h1 style={{ color: "red",  textAlign:"center"}}>Filme não encontrado!</h1></>}
      {/* <Login /> */}
    </div>
  );
}

export default login;
