import { BsPlayCircle } from "react-icons/bs";
import duna from "./Duna.jpg"

import styles from './styles.module.scss'

function MovieCard() {
  

    return (
   <div className={styles.movieCard}>
      <div className={styles.backMovieCard}> 
  <BsPlayCircle className={styles.playTrailer}/>
    <button className={styles.buyBtn}>Book now</button>
    </div>
    <img  className={styles.poster} src={duna} alt="Duna">
    </img>
    <div className={styles.movieCardText}>Name</div>
    <div>genre</div>
    <div>Time</div>
   
   
   </div>
    )
}
export default (MovieCard)