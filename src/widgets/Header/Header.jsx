import * as React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import styles from './styles.module.scss'


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className={styles.header}>
            <div><a href='/'>Logo </a></div>
            <nav className={styles.navbar} onMouseLeave={() => {
                        setIsMenuOpen(false)
                    }}>
                <div>
                    <button className={styles.menuBtn} onMouseEnter={() => {
                        setIsMenuOpen(true)
                    }} >Movies</button>

                    <div className={isMenuOpen ? styles.isOpenMenuLinks : styles.isCloseMenuLinks}>
                        <Link to='/movies' className={styles.menuLink}>Movies</Link>
                        <Link to='/comming_soon' className={styles.menuLink}>Comming soon</Link>
                    </div>
                </div>
                    <button className={styles.menuBtn}>Cinemas</button>

                    <button className={styles.menuBtn}>Info</button>
                    
            </nav>
        </header>
    )
}
export default (Header)