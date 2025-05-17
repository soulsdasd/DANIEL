import styles from "./Tiburones.module.css";
import blanco from "../assets/tiburon-blanco_812_0_orig.jpg";
import martillo from "../assets/casipea-3.jpeg";
import ballena from "../assets/ballena.jpg";
import toro from "../assets/tiburones-toro.jpg";
import duende from "../assets/images.jpg";
import tigre from "../assets/Tiger_shark(2).jpg";
import sin from "../assets/sin.jpg";
import fav from "../assets/images (1).jpg";
const sharks = [
  {
    name: "Tiburón Blanco",
    desc: "Uno de los más conocidos y temidos. Habita en aguas templadas y costeras. Tiene mala fama por el cine pero es mas dosil de lo que se piensa.",
    img: blanco,
    link: "https://www.nationalgeographic.es/animales/tiburon-blanco",
  },
  {
    name: "Tiburón Martillo",
    desc: "Reconocible por la forma de su cabeza. Suele vivir en aguas cálidas. En mi opinion el mas peculiar fisicamente no hay que explicar el por que.",
    img: martillo,
    link: "https://www.nationalgeographic.es/animales/tiburones-martillo",
  },
  {
    name: "Tiburón Ballena",
    desc: "El pez más grande del mundo. A pesar de su tamaño, es inofensivo y se alimenta de plancton. Muy amigable quisiera conocerlo.",
    img: ballena,
    link: "https://www.nationalgeographic.es/animales/tiburon-ballena",
  },
  {
    name: "Tiburón Toro",
    desc: "Tiburón robusto y fuerte, conocido por su comportamiento agresivo y su habilidad para nadar en agua dulce y salada.",
    img: toro,
    link: "https://www.nationalgeographic.es/animales/tiburon-toro",
  },
  {
    name: "Tiburón Duende",
    desc: "Tiburón raro y profundo, con un hocico alargado y mandíbula protráctil, que le permite atrapar presas rápidamente.",
    img: duende,
    link: "https://kids.nationalgeographic.com/animals/fish/facts/goblin-shark",
  },
  {
    name: "Tiburón Tigre",
    desc: "Tiburón grande y poderoso, famoso por sus rayas oscuras en el cuerpo y su dieta variada, desde peces hasta tortugas.",
    img: tigre,
    link: "https://www.nationalgeographic.com.es/mundo-animal/tiburon-tigre-depredador-clave-para-oceano_10751",
  },
];

export default function Tiburones() {
  return (
    <div className={styles.container}>
      <div className={styles.mainText}>
        <h1 className={styles.title}>Blog: Tiburones</h1>
        <h3 className={styles.subtitle}>By Daniel Avendaño</h3>
        <p className={styles.pm}>
          Amante de la vida marina pero sobre todo de los tiburones.
        </p>
      </div>
      <div className={styles.synthesisContainer}>
        <div className={styles.synthesisText}>
          <h2>Los tiburones</h2>
          <p>
            Los tiburones son depredadores natos en su mayoria, aun asi creo que
            se les impuso una mala fama en gran parte por el cine, no son como
            la mayoria de la gente cree, son animales inteligentes y que los
            casos en donde atacan a un ser humano son rarisimos, este blog busca
            transmitir lo interesante que es esta especie.
          </p>
        </div>
        <div className={styles.synthesisImg}>
          <img src={sin} alt="Tiburones" className={styles.synthesisImg} />
        </div>
      </div>
      <div className={styles.h2}>
        <h2>Tipos</h2>
      </div>

      <div className={styles.grid}>
        {sharks.map((shark, i) => (
          <div key={i} className={styles.card}>
            <img
              src={shark.img}
              alt={shark.name}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{shark.name}</h2>
              <p className={styles.cardDesc}>{shark.desc}</p>
              <a
                href={shark.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}>
                Aprende más =D
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.favContainer}>
        <div className={styles.favImg}>
          <img src={fav} alt="Tiburones" className={styles.favImg} />
        </div>
        <div className={styles.favText}>
          <h2>Mi favorito</h2>
          <p>
            El tiburón tigre para mí es el mejor de todos. Es verdad que es uno
            de los más temperamentales, irónico que sea mi favorito cuando
            menciono lo de la mala fama, lo sé. Aun así, que sea de los más
            hostiles no significa que si te encuentras con uno necesariamente te
            hará daño. Son muy curiosos, como todo tiburón. Lo que pasa con
            ellos es que se molestan con facilidad, por lo que hay que pensar
            cada movimiento. Hablando en el ámbito visual, verlo solo en
            imágenes es simplemente increíble. Me encantaría ver uno en persona.
          </p>
        </div>
      </div>
      <footer className={styles.footer}>
        <h3>
          ¿También te gustan los tiburones? ¡Cuéntame cuál es tu favorito!
        </h3>
        <p>Daniel Avendaño Velarde</p>
        <p>Email: adrianssk3@gmail.com</p>
        <p>Teléfono: +52 6692756032</p>
        <p>
          Redes sociales:{" "}
          <a
            href="https://github.com/soulsdasd/DANIEL"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/daniel-avenda%C3%B1o-velarde-4a9244338/"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}
