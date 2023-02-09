import styles from '@/styles/BannerSmall.module.css'
import {ElipseBtn} from '@/components/svgs/ElipseBtn'
import {BtnSquare} from '@/components'

export const BannerSmall=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.textContent}>
                    <p>CHILDREN OF</p>
                    <h1 className={styles.title}>FORGOTTEN<br/>GOD</h1>
                </div>
                    <div className={styles.dropDown}>
                        <p className={styles.dropDowText}>EXPLORE MORE ARTWORKS</p>
                        <div className={styles.ElipseBtn}><ElipseBtn fill="black" width="27"/></div>
                    </div>      
        
            </div>
            <div className={styles.btn}><BtnSquare name="START BIDDING"/></div>
        </div>
    
       
    )
}