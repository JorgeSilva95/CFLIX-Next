import CardInfFilmm from "../Styls/CardInfFilm.module.css";

function CardInfFilm(props) {
  return (
    <div className={CardInfFilmm.CardFilm}>
      <div className={CardInfFilmm.IMGBackGround}>
        <img
          src=""
          alt=""
          srcset={props.FilmURL + props.searchFilms.backdrop_path}
        />
      </div>
      <div className={CardInfFilmm.cardInfFil}>
        <h1>{props.searchFilms.title}</h1>
        <p>{props.searchFilms.release_date}</p>
        <p>{props.searchFilms.overview}</p>
      </div>
    </div>
  );
}

export default CardInfFilm;
