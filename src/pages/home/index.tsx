
import styles from './Home.module.css'
import Navbar from '../../components/navbar/Navbar';
import Form from '../../components/form/MainForm';
import Image from 'next/image'
import carpenterPicCar from '../picture/pexels-bryan-catota-3680454.jpg'
import carpenterPicWes from '../picture/pexels-thijs-van-der-weide-1094767.jpg'
import Trunk from '../picture/WoodenTrunkPage.png';
import Footer from '../../components/footer/Footer';
export default function Home() {


    return (
        <div className={styles.pagewrapper}>
            <Navbar></Navbar>
            <div className={styles.reposition}></div>
            <div className={styles.picturecarousel}>
                <Image src={carpenterPicCar} alt="" />
                <Image src={carpenterPicWes} alt="" />
                <Image src={carpenterPicCar} alt="" />
                <Image src={carpenterPicWes} alt="" />
                <h1 className={styles.h1carousel}>Ein leben lang gibt es nur eine Wahl</h1>
                <p className={styles.pcarousel}>
                    Wir führen unsere Projekte für große Unternehmen<br /> sowie wie private Kunden sorgfaltig und schnell durch.
                </p>
                <div className={styles.buttonwrapper} >
                    <a href="#" className={styles.btn}>Unsere Projekte</a>
                </div>
            </div>
            <div className={styles.layoutcontainer}>
                <div className={styles.infotext}>
                    <h2 className={styles.h2}>Unser Anspruch auf Detail</h2>
                    <p className={styles.p}>
                        Bei ABC Carpentry sind wir stolz darauf, bei jedem Projekt, dass wir durchführen, außergewöhnliche Handwerkskunst
                        und hochwertigen Kundenservice zu bieten. Unser Team aus erfahrenen Schreinern ist auf eine breite Palette von Schreinerarbeiten
                        spezialisiert.

                    </p>
                    <hr className={styles.hr} />
                    <h3 className={styles.h3}>Treten sie mit dem Formular mit uns in Kontakt</h3>


                </div>
            </div>
            <div className={styles.tilecontainer}>

                <div className={styles.backgroundcontainer}>
                    <Image src={Trunk} alt="" height={400} width={400} loading={'lazy'} />
                </div>
                <div className={styles.productinfo} />
            </div>
            <div className={styles.contactcontainer} />
            <div className={styles.formcontainer}>
                <Form></Form>
            </div>
            <Footer></Footer>
        </div>
    )

}