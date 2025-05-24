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
          <div className={styles.cardLinks}>
            <div>
              <button>Portfólio</button>
            </div>
            <div>
              <button>Projeto</button>
            </div>
            <div>
              <button>Contato</button>
            </div>
          </div>
          <div className={styles.cardTitle}>
            <a href="https://github.com/Zerogallo">
              <FaSquareGithub />
            </a>
            <a href="https://www.linkedin.com/in/renan-ferreira-44b944311/">
              <FaLinkedin />
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
