import styles from "./Home.module.css";
import Navbar from "../../components/navbar/Navbar";
import Form from "../../components/form/MainForm";
import Feedback from "../../components/feedback/Feedback";
import Image from "next/image";
import carpenterPicCar from "../picture/pexels-bryan-catota-3680454.jpg";
import carpenterPicWes from "../picture/pexels-thijs-van-der-weide-1094767.jpg";
import Wood from "../picture/pexels-alfo-medeiros-14569101.jpg";
import Trunk from "../picture/WoodenTrunk.png";
import Footer from "../../components/footer/Footer";
import Floor from "../picture/pexels-digital-buggu-576470.jpg";
import WoodFibres from "../picture/WoodFibres.jpg";
import TreeSideways from "../picture/Tree_sideways.png";
import { Card, Carousel, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import ContactInfo from "@/components/contactinfo/contactinfo";

export default function Home() {
  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  const { Meta } = Card;

  return (
    <div className={styles.pagewrapper}>
      <Navbar></Navbar>
      <div className={styles.reposition}></div>
      <div className={styles.herocarouselcontainer}>
        <Carousel
          autoplay={true}
          fade={true}
          speed={900}
          effect="fade"
          autoplaySpeed={1500}
          dots={false}
          style={{ width: "100%", height: "85svh", display: "flex" }}
        >
          <Image
            src={carpenterPicWes}
            alt=""
            className={styles.carouselimages}
          />
          <Image
            src={carpenterPicCar}
            alt=""
            className={styles.carouselimages}
          />
          <Image
            src={carpenterPicWes}
            alt=""
            className={styles.carouselimages}
          />
        </Carousel>
        <h1 className={styles.h1carousel}>
          Ein leben lang gibt es nur eine Wahl
        </h1>
        <p className={styles.pcarousel}>
          Wir führen unsere Projekte für große Unternehmen
          <br /> sowie wie private Kunden sorgfaltig und schnell durch.
        </p>
        <div className={styles.buttonwrapper}>
          <a href="/projects" className={styles.btn}>
            Unsere Projekte
          </a>
        </div>
      </div>
      <div className={styles.layoutcontainer}>
        <div className={styles.infotext}>
          <div className={styles.textwrapper}>
            <Image src={Floor} alt="" />
            <Image src={WoodFibres} alt="" />
          </div>
          <div className={styles.textwrap}>
            <Image src={Wood} alt="" />
            <h2 className={styles.h2}>
              Unser Anspruch auf Detail
              <hr className={styles.hrtop} />
            </h2>

            <p className={styles.p}>
              Bei ABC Carpentry sind wir stolz darauf, bei jedem Projekt, dass
              wir durchführen, außergewöhnliche Handwerkskunst und hochwertigen
              Kundenservice zu bieten.
            </p>
            <hr className={styles.hr} />
            <h3 className={styles.h3}>
              Treten sie mit dem Formular mit uns in Kontakt
            </h3>
          </div>
        </div>
        <div className={styles.productcontainer}>
          <Image src={TreeSideways} alt="" loading={"lazy"} />
          <div className={styles.producttext}>
            <h2 className={styles.h2}>
              Unsere Handwerkskunst
              <hr className={styles.hrtop} />
            </h2>

            <p className={styles.p}>
              Unser Team aus erfahrenen Schreinern ist auf eine breite Palette
              von Schreinerarbeiten spezialisiert.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.tilecontainer}>
        <div className={styles.backgroundcontainer}>
          <Image src={Trunk} alt="" height={400} width={400} loading={"lazy"} />
        </div>
        <div className={styles.productinfo}>
          <div style={{ padding: "30px", position: "relative" }}>
            <Row gutter={16} style={{ justifyContent: "center" }}>
              <Col span={8}>
                <Card
                  bordered={false}
                  cover={
                    <img
                      src="https://github.com/Digitalframework/FullStackWebApp/blob/main/webcomponents/src/picture/Lerche.jpg?raw=true"
                      alt=""
                      width="300"
                      height="300"
                      style={{ objectFit: "fill" }}
                    />
                  }
                >
                  <Meta title="Laminat" description="This is the description" />
                </Card>
              </Col>
              <Col span={8} offset={8}>
                <Card
                  bordered={false}
                  cover={
                    <img
                      src="https://github.com/Digitalframework/FullStackWebApp/blob/main/webcomponents/src/picture/Fichte.jpg?raw=true"
                      alt=""
                      width="300"
                      height="300"
                      style={{ objectFit: "fill" }}
                    />
                  }
                >
                  <Meta title="Parkett" description="This is the description" />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className={styles.contactcontainer}>
        <Feedback
          clientname={["lisa", "bernd", "name", "mikdad"]}
          customerreview={["text1", "text2", "text3", "text4"]}
          rating={4.0}
        ></Feedback>
      </div>
      <div className={styles.formcontainer}>
        <div className={styles.contactinfowrapper}>
          <ContactInfo
            phonenumber={"0124 1415"}
            email={"email@email.de"}
            adress={"Nummer 2"}
          ></ContactInfo>
          <Form />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
