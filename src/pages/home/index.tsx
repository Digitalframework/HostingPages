
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
            <Navbar checked={false} updateFields={function (fields: Partial<{ checked: boolean; }>): void {
                throw new Error('Function not implemented.');
            } }></Navbar>
                <div className={styles.picturecarousel}>
		            <Image src={carpenterPicCar} alt=""/>
                    <Image src={carpenterPicWes} alt=""/>
                    <Image src={carpenterPicCar} alt="" />
                    <Image src={carpenterPicWes} alt="" />
                    <h1 className={styles.h1carousel}>Ein leben lang gibt es nur eine Wahl</h1>
                        <p className={styles.pcarousel}>
                        Wir führen unsere Projekte für große Unternehmen sowie wie private Kunden sorgfaltig und schnell durch.
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
                        <hr className={styles.hr}/>
                        <h3 className={styles.h3}>Treten sie mit dem Formular mit uns in Kontakt</h3>
                        <div className={styles.verticalbar}>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.707 14.707" xmlSpace="preserve" width="256px" height="256px" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <rect x="6.275" y="0" style={{fill:"#222222"}} width="2.158" height="14.707"></rect> </g> </g></svg>
                    </div>
                    
                    </div>
                </div>
                <div className={styles.tilecontainer}>
                     
                    <div className={styles.backgroundcontainer}>
                    <Image src={Trunk} alt="" height={660} width={660} loading={'lazy'}/>
                    </div>
                    <div className={styles.productinfo} />   
                </div>
                <div className={styles.contactcontainer}/>
                <div className={styles.formcontainer}>
                <Form></Form>
               </div>
               <Footer></Footer>
        </div>
    )

}