import styles from './AboutYou.module.css'
import Floor from '../../pages/picture/pexels-digital-buggu-576470.jpg';
import WoodFibres from '../../pages/picture/WoodFibres.jpg';
import Image from 'next/image'
export default function AboutYou() {
    
    return ( 
        <div className={styles.container}>
        <div className={styles.flex}>
           <div className={styles.imagePlaceholder}>
            <div className={styles.textwrapper}>       
                <Image src={Floor} alt="" />
                <Image src={WoodFibres} alt="" />
            </div>
           </div>
           <div className={styles.about}>
              <div className={styles.aboutTitle}>
                 <h2>ABOUT</h2>
              </div>
              <p className={styles.fontSize}>We combine smart design with uncompromised quality to craft the furniture art pieces</p>
              <div className={styles.divider}></div>
              <div className={styles.marginTop}>
                 <div className={styles.inlineText}>
                    <span className={styles.largeLetter}>L</span>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.</p>
                 </div>
                 <p>Donec placerat nisi magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Maecenas nec odio et ante tincidunt tempus.</p>
              </div>
           </div>
        </div>
        <div className={styles.flex}>
           <div className={styles.about}>
              <h2>Live Edge Handcrafted with Love</h2>
              <div className={styles.divider}></div>
              <p>Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisi magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat nisi magna, et faucibus arcu condimentum sed.</p>
           </div>
           <div className={styles.imagePlaceholder}></div>
        </div>
     </div>
    )
}
