import styles from '@/styles/BannerT1.module.css'

export const Banner=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <p>Pellentesque ut consectetur nulla</p>
            <div><h1 className={styles.title}>Eget quis <span className={styles.titleMedium}>ultrices id</span></h1></div>
           
            <div className={styles.titleInline}><h1 className={styles.title}><span className={styles.titleMedium}>eu nec</span> nulla.</h1>
            <button className={styles.btn}>Sometimes</button>
            </div>
        </div>
        </div>
       
    )
}