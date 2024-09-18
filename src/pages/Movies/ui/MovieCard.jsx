import { BsPlayCircle } from "react-icons/bs";
import duna from "./Duna.jpg";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

function MovieCard() {
  return (
    <div className={styles.movieCard}>
      <img className={styles.poster} src={duna} alt="Duna" />

      <div className={styles.backMovieCard}>
        <BsPlayCircle className={styles.playTrailer} />
        <button className={styles.buyBtn}>
          <Link to='/afisha/duna'>Book now</Link>
          </button>
      </div>
      <h3 className={styles.movieCardText}>Name</h3>
      <h3 className={styles.genreText}>genre</h3>
    </div>
  );
}
export default MovieCard;
