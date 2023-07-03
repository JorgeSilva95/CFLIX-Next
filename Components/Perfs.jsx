import Link from "next/link";
import Perfss from "../Styls/Perfs.module.css";
import { BiLock } from "react-icons/bi";
import DBn from "../DB/DB.json";
export default function Perfs() {
  const namesL = DBn;
  const namesLs = namesL.Users;

  const url =
    "http://occ-0-819-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYH07rnzkjjF5a-70fBB0hAiq-5YcsMlWhfF3OqbLDvehfLr7dULQ9jw6BNuQ20GjWJU349M1lXhgSSAnD3eyJO3Jdi8cap9P19a.png";
  return (
    <div className={Perfss.perfCard}>
      <Link href="/home">
        <button
          onClick={() => {
            alert("Seja Bem-Vindo!!");
          }}
        >
          <img srcSet={url} alt="Perfil" />
          <p>
            {namesLs.map((usuario) => (
              <li key={usuario.id}>{usuario.Users}</li>
            ))}
          </p>
        </button>
      </Link>
      <BiLock className={Perfss.lockIcon} />
    </div>
  );
}
