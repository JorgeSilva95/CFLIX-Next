import CardPerfss from "../Styles/CardPerfs.module.css";
import Perfs from "./Perfs";

function CardPerfs() {
  return (
    <div className={CardPerfss.cardPerfs} container>
      <h1>Quem está assistindo?</h1>
      <div className={CardPerfss.perfsContainer}>
        <Perfs />
        <Perfs />
        <Perfs />
      </div>
      <button className={CardPerfss.btnPadrao}>Gerenciar perfis</button>
    </div>
  );
}

export default CardPerfs;
