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
   <button>Date</button>
    <button>Time</button>
    <button>Other</button>
    </div>
    <MovieCard></MovieCard>
</div>
</div>
    
    )
}
export default (Movies)