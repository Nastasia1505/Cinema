import { BsPlayCircle } from "react-icons/bs";
import duna from "./Duna.jpg";

import styles from "./styles.module.scss";

function MovieCard() {
  return (
    <div className={styles.movieCard}>
      <img className={styles.poster} src={duna} alt="Duna" />

      <div className={styles.backMovieCard}>
        <BsPlayCircle className={styles.playTrailer} />
        <button className={styles.buyBtn}>Book now</button>
      </div>
      <div className={styles.movieCardText}>Name</div>
      <div className={styles.genreText}>genre</div>
    </div>
  );
}
export default MovieCard;
