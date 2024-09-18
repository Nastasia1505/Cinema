import { LiaCalendar } from "react-icons/lia";
import { PiTimerThin } from "react-icons/pi";
import { MdLocalMovies } from "react-icons/md";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { MovieCard } from "./ui";


import styles from "./styles.module.scss";
import { style } from "@mui/system";

function Movies() {
  return (
    <section className={style.section}>
      <div className={styles.headerAfisha}>
        <h1 className={styles.title}>Movies</h1>
        <div className={styles.headerAfishaBtn}>
          <button className={styles.afishaBtn}>Now showing</button>
          <button className={styles.afishaBtn}>Comming soon</button>
        </div>
      </div>
      <div className={styles.options}>
        <button className={styles.optionsBtn}>
          <LiaCalendar className={styles.optionsBtnIcon} />
          <h3 className={styles.optionsBtnText}>Date</h3>
          <IoChevronDownCircleOutline className={styles.optionsBtnArrow}
          />
        </button>
        <button className={styles.optionsBtn}>
          <PiTimerThin className={styles.optionsBtnIcon} />
          <h3 className={styles.optionsBtnText}>Time</h3>
          <IoChevronDownCircleOutline className={styles.optionsBtnArrow} />
        </button>
        <button className={styles.optionsBtn}>
          <MdLocalMovies className={styles.optionsBtnIcon} />
          <h3 className={styles.optionsBtnText}>Other</h3>
          <IoChevronDownCircleOutline className={styles.optionsBtnArrow} />
        </button>
      </div>
      <div className={styles.movieTable}>
       {/* отображать массив с объектами фильмами */}
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </div>
    </section>
  );
}
export default Movies;
