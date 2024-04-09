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
                        <a href='/movies' className={styles.menuLink}>Movies</a>
                        <a href='/comming_soon' className={styles.menuLink}>Comming soon</a>
                    </div>
                </div>
                <div>
                    <button className={styles.menuBtn}>Cinemas</button></div>
                <div>
                    <button className={styles.menuBtn}>Info</button></div>
                    
            </nav>
        </header>
    )
}
export default (Header)