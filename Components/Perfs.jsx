import Link from "next/link";
import Perfss from "../Styles/Perfs.module.css";
import { BiLock } from "react-icons/bi";
import DBn from "../DB/DB.json";
import url from "../DB/Imgs/Perfil1.png";
import Image from "next/image";
export default function Perfs() {
  const namesL = DBn;
  const namesLs = namesL.Users;
  return (
    <div className={Perfss.perfCard}>
      <Link href="/home">
        <button
          onClick={() => {
            alert("Seja Bem-Vindo!!");
          }}
        >
          <Image src={url} alt="Perfil" />
          <p>perfil</p>
        </button>
      </Link>
      <BiLock className={Perfss.lockIcon} />
    </div>
  );
}
