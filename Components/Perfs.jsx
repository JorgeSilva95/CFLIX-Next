import Link from "next/link";
import Perfss from "../Styls/Perfs.module.css";
import { BiLock } from "react-icons/bi";
import DBn from "../DB/DB.json";
export default function Perfs() {
  const namesL = DBn;
  const namesLs = namesL.Users;

  const url = "../DB/Imgs/Perfil1.png";
  return (
    <div className={Perfss.perfCard}>
      <Link href="/home">
        <button
          onClick={() => {
            alert("Seja Bem-Vindo!!");
          }}
        >
          <img srcSet={url} alt="Perfil" />
          <p>perfil</p>
        </button>
      </Link>
      <BiLock className={Perfss.lockIcon} />
    </div>
  );
}
