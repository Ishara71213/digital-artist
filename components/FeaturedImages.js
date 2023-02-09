import styles from '@/styles/FeaturedImages.module.css'
import {Images,ImageCard} from '@/components'


export const FeaturedImages=()=>{
    return( 
                <div className={styles.wrapper}>
                    {Images.map((item)=>{
                        if(item.featured===1){
                        return(
                                <ImageCard 
                                    width={item.width} 
                                    height={item.height} 
                                    src={item.src} 
                                    alt={item.alt} 
                                    description={item.description}
                                    tagLine={item.tagLine}
                                    featured={item.featured} 
                                />
                        )
                    }})}
                </div>
    )
}


