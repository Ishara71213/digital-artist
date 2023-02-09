import styles from '@/styles/ImageGallary.module.css'
import { ImageCard,BannerSmall,Images } from "@/components"

export const ImageGallary=()=>{

    return(
        <div className={styles.gallary__Container}>
            <div className={styles.container__images}>
                <div className={styles.wrapper}>
                    {Images.map((item)=>{
                        if(item.featured!==1) return(
                            <ImageCard 
                                width={item.width} 
                                height={item.height} 
                                src={item.src} 
                                alt={item.alt} 
                                description={item.description}
                                price={item.price}
                                featured={item.featured} 
                            />
                          
                        )
                    })}
                </div>
            </div>
             <BannerSmall></BannerSmall>       
        </div>
    )
}


