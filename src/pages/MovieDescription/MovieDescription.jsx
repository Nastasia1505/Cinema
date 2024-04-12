import { LiaCalendar } from "react-icons/lia";
import styles from "./styles.module.scss";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { PiTimerThin } from "react-icons/pi";
import { MdLocalMovies } from "react-icons/md";

function MovieDescription() {
  return (
<div>
    <img></img>
    <div>
        <h1>

        </h1>
        <div>genre</div>
        <div>time</div>
        <div><p>Description</p></div>
        <div className={styles.options}>
        <button className={styles.optionsBtn}>
          <LiaCalendar className={styles.optionsBtnIcon} />
          <div className={styles.optionsBtnText}>Date</div>
          <IoChevronDownCircleOutline className={styles.optionsBtnArrow} />
        </button>
        <button className={styles.optionsBtn}>
          <PiTimerThin className={styles.optionsBtnIcon} />
          <div className={styles.optionsBtnText}>Time</div>
          <IoChevronDownCircleOutline className={styles.optionsBtnArrow} />
        </button>
        <button className={styles.optionsBtn}>
          <MdLocalMovies className={styles.optionsBtnIcon} />
          <div className={styles.optionsBtnText}>Other</div>
          <IoChevronDownCircleOutline className={styles.optionsBtnArrow} />
        </button>
      </div>
    </div>
</div>
  )
}
export default MovieDescription;