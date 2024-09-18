import { LiaCalendar } from "react-icons/lia";
import styles from "./styles.module.scss";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { PiTimerThin } from "react-icons/pi";
import { MdLocalMovies } from "react-icons/md";
import { BsTag } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";

import duna from './Duna.jpg'

function MovieDescription() {
  const d = new Date()
  console.log(d.getDay())
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <img className={styles.poster} src={duna} alt="Duna" ></img>
        <div className={styles.description}>
          <h2 className={styles.title}>
            Duna
          </h2>
          <h4> <BsTag />Action, Drama, Sci-Fi</h4>
          <h4> <BsStopwatch />166 min.</h4>
          <p>Duke Paul Atreides joins the Fremen to become Muad'Dib while trying to stop the advance of war.</p>
        </div>
      </section>

      <div className={styles.options}>
        <button className={styles.optionsBtn}>
          <LiaCalendar className={styles.optionsBtnIcon} />
          <p className={styles.optionsBtnText}>Date</p>
          <IoChevronDownCircleOutline className={styles.optionsBtnArrow} />
        </button>
        <button className={styles.optionsBtn}>
          <PiTimerThin className={styles.optionsBtnIcon} />
          <p className={styles.optionsBtnText}>Time</p>
          <IoChevronDownCircleOutline className={styles.optionsBtnArrow} />
        </button>
        <button className={styles.optionsBtn}>
          <MdLocalMovies className={styles.optionsBtnIcon} />
          <p className={styles.optionsBtnText}>Other</p>
          <IoChevronDownCircleOutline className={styles.optionsBtnArrow} />
        </button>

      </div>
    </div>
  )
}
export default MovieDescription;