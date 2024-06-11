import Styles from "../Styles/HeaderMenuPC.module.css";
import { BiSearch } from "react-icons/bi";
export function HeaderMenuPC( { getSearch, clkSearch } ) {
  return (
    <div className={Styles.headerContainer}>
      <div className={Styles.header}>
        <a href="/home">
          <button>Inicio</button>
        </a>
        <a href="/filmes">
          <button>Filmes</button>
        </a>
        <a href="/series">
          <button>Séries</button>
        </a>
      </div>
      <form
        className={Styles.headerSearch}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          placeholder="Buscar"
          type="text"
          onChange={(e) => getSearch(e.target.value)}
        />
        <button type="submit" onClick={clkSearch}>
          <BiSearch />
        </button>
      </form>
    </div>
  );
}
