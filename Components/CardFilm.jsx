import { useState } from "react";
import styles from "../Styles/CardFilm.module.css";
import Img from "../DB/Imgs/Unknow.png";

export function CardFilm({ film, imageFilm }) {
  if (film && film.overview && film.overview.length > 400) {
    film.overview = film.overview.slice(0, 400) + "...";
  }

  return (
    <div>
      <div className={styles.cardFilm}>
        <h1 className={styles.cardFilmTitle}>
          {film.title ? film.title : film.name ? film.name : "SEM TITULO"}
        </h1>
        <img
          className={styles.cardFilmImage}
          src={imageFilm || Img.src}
          alt=""
          srcSet={imageFilm || Img.src}
        />
        <p className={styles.cardFilmDate}>
          Lançamento:{" "}
          {new Date(
            film.release_date
              ? film.release_date
              : film.known_for &&
                film.known_for.length > 0 &&
                film.known_for[0].first_air_date
              ? film.known_for[0].first_air_date
              : film.known_for &&
                film.known_for.length > 0 &&
                film.known_for[0].release_date
              ? film.known_for[0].release_date
              : film.first_air_date && film.first_air_date
              ? film.first_air_date
              : "SEM DATA DE LANÇAMENTO"
          ).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p>
          {film.media_type === "person"
            ? "Caseiro"
            : film.media_type === "movie"
            ? "Filme"
            : film.media_type === "tv"
            ? "Serie"
            : ""}
        </p>

        <p className={styles.cardFilmDesc}>
          {film.overview
            ? film.overview
            : film.known_for && film.known_for[0].overview
            ? film.known_for[0].overview
            : "SEM SINOPSE"}
        </p>
      </div>
    </div>
  );
}
