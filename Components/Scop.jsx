import Styles from "../Styles/Scop.module.css";
import { CardFilm } from "./CardFilm";

function Scop({searchFilms}) {
  const IMG = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";
  console.log(searchFilms[0]);

  return (
    <div className= {Styles.Container}>
      <div className={Styles.ContainerCardFilms}>
        {searchFilms.map((film) => (
          <CardFilm film={film} imageFilm={film.backdrop_path ? IMG + film.backdrop_path : ""} />
        ))}
        {/* 
      <div>{props.Film}</div>
      <div>
        <img src="" alt="" srcset={IMG + props.poster_path} />
        {props.date}
      </div>
      <div>{props.detalhs}</div> */}
      </div>
    </div>
  );
}

export default Scop;
