import { useState } from "react";
import styles from "../Styles/CardFilm.module.css";
import Img from "../DB/Imgs/Unknow.png";

export function CardFilm({ film, imageFilm }) {
    if (film.overview.length > 450) {
      film.overview = film.overview.slice(0, 450) + "...";
    }
  return (
    <div>
      <div className={styles.cardFilm}>
        <h1 className={styles.cardFilmTitle}>{film.title}</h1>
        <img
          className={styles.cardFilmImage}
          src={imageFilm || Img.src}
          alt=""
          srcSet={imageFilm || Img.src}
        />
        <p className={styles.cardFilmDate}>
          Lançamento:{" "}
          {new Date(film.release_date).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
          
        <p className={styles.cardFilmDesc}>{film.overview}</p>
      </div>
    </div>
  );
}
