import { useState, useEffect } from "react";
import Styles from "../Styles/Header.module.css";
import { HeaderMenuPC } from "./HeaderMenuPC";
import { HeaderMenuMobile } from "./HeaderMenuMobile";

function Header({ getSearch, clkSearch }) {
  const [buttonIs, setButtonsIs] = useState("mobile");

  return (
    <>
      <div id={Styles.HeaderMenuPC}>
        <HeaderMenuPC getSearch={getSearch} clkSearch={clkSearch} />
      </div>

      <div id={Styles.HeaderMenuMobile}>
        <HeaderMenuMobile
          getSearch={getSearch}
          clkSearch={clkSearch}
        />
      </div>
    </>
  );
}

export default Header;
