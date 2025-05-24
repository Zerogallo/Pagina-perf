import styles from "./stylesTela.module.css";
import imagens from "../../public/contato.jpg";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
export default function TelaIncial() {
  return (
    <>
      <div className={styles.appBackground}>
        <article className={styles.card}>
          <section className={styles.cardHeader}>
            <img
              className={styles.cardImage}
              src={imagens}
              alt="Imagen de perfil de Ícaro Harry"
            />
            <h1 className={styles.cardName}>
              Renan <span className={styles.cardList}>Ferreira</span>
            </h1>
            <p>Desenvolvedor mb front-end. Conheça o meu trabalho </p>
          </section>
          <ul className={styles.cardLinks}>
            <li>
              <button>Portfólio</button>
            </li>
            <li>
              <button>Projeto</button>
            </li>
            <li>
              <button>Contato</button>
            </li>
          </ul>
          <div className={styles.cardTitle}>
            <button>
              <FaSquareGithub />
            </button>
            <button>
              <FaLinkedin />
            </button>
          </div>
        </article>
      </div>
    </>
  );
}
