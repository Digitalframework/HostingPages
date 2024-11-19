
import styles from './Home.module.css'
import HeroSection from '../../components/heroSection/HeroSection';
import AboutYou from '../../components/aboutYou/AboutYou';
import Form from '../../components/form/MainForm';
import Feedback from '../../components/feedback/Feedback';
import Image from 'next/image'
import carpenterPicCar from '../picture/pexels-bryan-catota-3680454.jpg'
import carpenterPicWes from '../picture/pexels-thijs-van-der-weide-1094767.jpg'
import Wood from '../picture/pexels-alfo-medeiros-14569101.jpg';
import Trunk from '../picture/WoodenTrunk.png';
import Footer from '../../components/footer/Footer';
import Floor from '../picture/pexels-digital-buggu-576470.jpg';
import WoodFibres from '../picture/WoodFibres.jpg';
import TreeSideways from '../picture/Tree_sideways.png';
import { Card, Carousel, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import ContactInfo from '@/components/contactinfo/contactinfo';
import AboutUs from '../projects';


export default function Home() {

    const gridStyle = {
        width: '25%',
        textAlign: 'center',
      };

      const { Meta } = Card;

    return (
        <div className={styles.pagewrapper}>
            <div className={styles.herocarouselcontainer}>
            <HeroSection/>
            </div>
            <AboutYou/>
            <div className={styles.tilecontainer}>
                
                <div className={styles.backgroundcontainer}>
                    <Image src={Trunk} alt="" height={400} width={400} loading={'lazy'} />
                </div>
                <div className={styles.productinfo}>
                    <div style={{ padding: '30px', position: 'relative'}}>
                        <Row gutter={16} style={{justifyContent: 'center'}}>
                        <Col span={8} >
                            <Card bordered={false} cover={
                            <img src="https://github.com/Digitalframework/FullStackWebApp/blob/main/webcomponents/src/picture/Lerche.jpg?raw=true" alt="" width="300" 
                            height="300" style={{objectFit: "fill"}}/>}>
                            <Meta title="Laminat" description="This is the description" />
                            </Card>
                        </Col>
                        <Col span={8} offset={8}>
                            <Card bordered={false} cover={
                            <img src="https://github.com/Digitalframework/FullStackWebApp/blob/main/webcomponents/src/picture/Fichte.jpg?raw=true" alt="" width="300" 
                            height="300" style={{objectFit: "fill"}}/>}>
                            <Meta title="Parkett" description="This is the description" /> 
                            </Card>
                        </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className={styles.contactcontainer}>
                <Feedback clientname={["lisa","bernd","name","mikdad"]} customerreview={["text1","text2","text3","text4"]} rating={4.0}></Feedback>
            </div>
            <div className={styles.formcontainer}>
                <div className={styles.contactinfowrapper}>
                    <ContactInfo phonenumber={"0124 1415"} email={"email@email.de"} adress={"Nummer 2"}></ContactInfo>
                    <Form/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )

}