import Styles from "../Styles/HeaderMenuMobile.module.css";
import { useState } from "react";
import { BiSearch, BiMenu } from "react-icons/bi";
export function HeaderMenuMobile({ getSearch, clkSearch }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={Styles.headerContainer}>
      <div className={Styles.Header}>
        <div className={Styles.dropdown}>
          <button onClick={toggleDropdown}>
            Menu <BiMenu />
          </button>
          {isOpen && (
            <div className={Styles.dropdownContent}>
              <a href="/home">
                <button>Inicio</button>
              </a>
              <a href="#">
                <button>Filmes</button>
              </a>
              <a href="#">
                <button>Séries</button>
              </a>
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
          )}
        </div>
      </div>
    </div>
  );
}

/*
<form
        className={Styles.headerSearch}
        onSubmit={(e) => { e.preventDefault(); isOpen=false; }}
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
*/
