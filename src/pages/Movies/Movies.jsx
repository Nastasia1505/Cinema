import { LiaCalendar } from "react-icons/lia"
import { PiTimerThin } from "react-icons/pi"
import { MdLocalMovies } from "react-icons/md"
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { Header } from "widgets/Header"
import { MovieCard } from "./ui"

import styles from './styles.module.scss'

function Movies() {
    return ( 
<div> 
<Header></Header>
<div>
<div className={styles.headerAfisha}> 
    <h1 className={styles.h1}>Movies</h1>
    <div className={styles.headerAfishaBtn}>
    <button className={styles.afishaBtn}>Now showing</button>
    <button className={styles.afishaBtn}>Comming soon</button>
    </div>
    </div>
    <div className={styles.options}> 
   <button className={styles.optionsBtn}>
   <div className={styles.optionsBtnIcon}><LiaCalendar /></div> 
   <div className={styles.optionsBtnText}>Date</div> 
   <div className={styles.optionsBtnArrow}><IoChevronDownCircleOutline /></div> 
    </button>
    <button className={styles.optionsBtn}>
    <div className={styles.optionsBtnIcon}> <PiTimerThin /></div>
    <div className={styles.optionsBtnText}>Time</div> 
    <div className={styles.optionsBtnArrow}><IoChevronDownCircleOutline /></div> 
        </button>
    <button className={styles.optionsBtn}>
    <div className={styles.optionsBtnIcon}> <MdLocalMovies /></div>
    <div className={styles.optionsBtnText}>Other</div> 
    <div className={styles.optionsBtnArrow}><IoChevronDownCircleOutline /></div> 
        </button>
    </div>
    <div className={styles.movieTable}>
    <MovieCard></MovieCard>
    <MovieCard></MovieCard>
    <MovieCard></MovieCard>
    <MovieCard></MovieCard>
    <MovieCard></MovieCard>
    <MovieCard></MovieCard>
    </div>
    
</div>
</div>
    
    )
}
export default (Movies)