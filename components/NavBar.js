import styles from '@/styles/NavBar.module.css'
import { MenuIcon } from './svgs/MenuIcon'

export const NavBar=()=>{
    return(
        <nav className={styles.navWrapper}>
            <p className={styles.backBtn}>Back</p>
            <div className={styles.logo}>
                <p>DIGITAL ARTIST</p>
                <p>BANKSY_IS_DEAD</p>
            </div>
            <div className={styles.MenuIcon}>
                <MenuIcon fill='white' width='14'/>
            </div>
            
        </nav>
    )
}