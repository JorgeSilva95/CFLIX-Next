import { useState, useEffect } from "react";
import Styles from "../Styles/Header.module.css";
import { BiSearch, BiBell } from "react-icons/bi";

function Header(props) {
  return (
    <div className={Styles.cbHeader}>
      <h1 className={Styles.logo}>CLFLIX</h1>
      <div className={Styles.primaryNavigation}>
        <ul className={Styles.cbList}>
          <a href="">Inicio</a>
        </ul>
        <ul className={Styles.cbList}>
          <a href="">Séries</a>
        </ul>

        <ul className={Styles.cbList}>
          <a href="">Filmes</a>
        </ul>

        <ul className={Styles.cbList}>
          <a href="">Bombando</a>
        </ul>

        <ul className={Styles.cbList}>
          <a href="">Minha Lista</a>
        </ul>

        <ul className={Styles.cbList}>
          <a href="">Navegar por idiomas</a>
        </ul>
      </div>

      <div className={Styles.secondaryNavigation}>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Impede o envio padrão do formulário
            props.clkSearch(); // Executa a função de pesquisa
          }}
        >
          <input
            type="text"
            id="gsearch"
            name="gsearch"
            onChange={(e) => {
              props.getSearch(e.target.value);
            }}
            placeholder="Pesquisar..."
          />
          <button type="submit" className={Styles.cbListRgt}>
            <BiSearch className={Styles.btns} />
          </button>
        </form>

        <ul className={Styles.cbListRgt}>
          <a href="">Infantil</a>
        </ul>
        <button className={Styles.cbListRgt}>
          <BiBell className={Styles.btns} />
        </button>
      </div>
    </div>
  );
}

export default Header;
