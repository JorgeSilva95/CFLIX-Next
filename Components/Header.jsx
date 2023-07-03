import { useState, useEffect } from "react";
import Headerr from "../Styls/Header.module.css";
import { BiSearch, BiBell } from "react-icons/bi";

function Header(props) {
  return (
    <div className={Headerr.cbHeader}>
      <h1 className={Headerr.logo}>CLFLIX</h1>
      <div className={Headerr.primaryNavigation}>
        <ul className={Headerr.cbList}>
          <a href="">Inicio</a>
        </ul>
        <ul className={Headerr.cbList}>
          <a href="">Séries</a>
        </ul>

        <ul className={Headerr.cbList}>
          <a href="">Filmes</a>
        </ul>

        <ul className={Headerr.cbList}>
          <a href="">Bombando</a>
        </ul>

        <ul className={Headerr.cbList}>
          <a href="">Minha Lista</a>
        </ul>

        <ul className={Headerr.cbList}>
          <a href="">Navegar por idiomas</a>
        </ul>
      </div>

      <div className={Headerr.secondaryNavigation}>
        <button
          type="submit"
          className={Headerr.cbListRgt}
          onClick={() => {
            props.clkSearch();
          }}
        >
          <BiSearch className={Headerr.btns} />
        </button>
        <input
          type="search"
          id="gsearch"
          name="gsearch"
          onChange={(e) => {
            props.gtSearch(e.target.value);
          }}
          placeholder="Buscar..."
        ></input>

        <ul className={Headerr.cbListRgt}>
          <a href="">Infantil</a>
        </ul>
        <button className={Headerr.cbListRgt}>
          <BiBell className={Headerr.btns} />
        </button>
      </div>
    </div>
  );
}

export default Header;
