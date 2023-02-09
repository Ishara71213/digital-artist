import styles from '@/styles/imageCard.module.css'
import Image from "next/image"

export const ImageCard=(props)=>{
    return(
            <div className={styles.imageCard}>
                <Image layout="responsive" width={props.width} height={props.height} src={props.src} alt={props.alt} />
                  
                    <div className={props.description.length>43 || props.featured===1
                                    ? styles.description2 : styles.description}>
                        <p className={styles.descriptionText}>{props.description}</p>

                        {props.featured===0 && props.description.length<43 &&
                            <p className={styles.priceInline}>{props.price}</p>
                        }
                        {props.featured===0 && props.description.length>43 &&
                            <p className={styles.price}>{props.price}</p>
                        }
                        {props.featured===1 &&
                            <p className= {styles.tagLine}>{props.tagLine} </p>
                        }	
                    </div>       
            </div>
    )
}