import styles from './Cardcircle.module.css'
import Image from 'next/image'
export default function Cardcircle() {

    return (
        <div className={styles.productcollection}>
            <div className={styles.productimgcontainer}>
            <Image src="https://github.com/Digitalframework/FullStackWebApp/blob/main/webcomponents/src/picture/Buche.jpg?raw=true" alt="" width="300" 
            height="300" />
            <Image src="https://github.com/Digitalframework/FullStackWebApp/blob/main/webcomponents/src/picture/Eiche.jpg?raw=true" alt="" width="300" 
            height="300" />
            <Image src="https://github.com/Digitalframework/FullStackWebApp/blob/main/webcomponents/src/picture/Fichte.jpg?raw=true" alt="" width="300" 
            height="300" />
            <Image src="https://github.com/Digitalframework/FullStackWebApp/blob/main/webcomponents/src/picture/Lerche.jpg?raw=true" alt="" width="300" 
            height="300" />
            </div>
            <div className={styles.infotext}>
                <p>Parkett ist ein Fußbodenbelag aus Holz oder Bambus für Innenräume.</p>
            </div>
        </div>
    )
}
