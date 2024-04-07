
import { display, style } from '@mui/system'
import * as React from 'react'
import { useState } from 'react'
import styles from './styles.module.scss'


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <header className={styles.header}>
            <div>Logo</div>
            <nav className={styles.navbar}>
                <div>
                    <button className={styles.menuBtn} onClick={() => {
                        setIsMenuOpen(true)
                    }}>Movies</button>

                    <div className={isMenuOpen ? styles.isOpenMenuLinks : styles.isCloseMenuLinks}>
                        <a className={styles.menuLink}>Movies</a>
                        <a className={styles.menuLink}>Comming soon</a>
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