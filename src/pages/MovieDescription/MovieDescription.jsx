import { LiaCalendar } from "react-icons/lia";
import styles from "./styles.module.scss";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { PiTimerThin } from "react-icons/pi";
import { MdLocalMovies } from "react-icons/md";
import { BsTag } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";

import duna from './Duna.jpg'

function MovieDescription() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <img className={styles.poster} src={duna} alt="Duna" ></img>
        <div className={styles.description}>
          <h1 className={styles.title}>
            Duna
          </h1>
          <div> <BsTag />Боевик, Драма, Фантастика</div>
          <div> <BsStopwatch />166 мин.</div>
          <div><p>Duke Paul Atreides joins the Fremen to become Muad'Dib while trying to stop the advance of war.</p></div>
        </div>
      </div>

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
  )
}
export default MovieDescription;