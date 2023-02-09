import styles from  '@/styles/ImageDescription.module.css'
import Image from 'next/image'

export const ImageDescription=()=>{
    return(
        
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.titleLight}>Odio morbi</h1>
                <h1 className={styles.titleBold}>Urna aliquam tinc</h1>
                <h1 className={styles.titleBold}>Aliquam pellentesque</h1>
                {/* <div className={styles.description}> */}
                    <p className={styles.description}>
                        Sed nunc nunc sagittis nulla varius. Vitae justo
                        volutpat dolor ac. Elementum sed aliquet lorem
                        sapien volutpat. In sed velit pretium sed. In quisque
                        adipiscing congue faucibus. Enim orci feugiat mattis
                        ultricies enim arcu cras mattis aliquet. Consequat
                        amet amet mauris ac at est erat. Diam egestas
                        volutpat purus accumsan nulla tellus faucibus.
                        Viverra eleifend amet egestas tincidunt posuere
                    </p>
                {/* </div> */}
            </div>
            <div className={styles.ImageContainer}>
                <Image src='/img9.png'  width={516} height={570} alt={'ordio mobi'}></Image>
            </div>
            
        </div>
    )
}