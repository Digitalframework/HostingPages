import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";

import carpenterPicCar from "../../picture/pexels-bryan-catota-3680454.jpg";
import carpenterPicWes from "../../picture/pexels-thijs-van-der-weide-1094767.jpg";
import styles from "../Home.module.css";

export default function HeroSection() {
  return (
    <div className={styles.herocarouselcontainer}>
      <Carousel autoplay fade speed={900} autoplaySpeed={1500} dots={false}>
        <Image src={carpenterPicWes} alt="Woodworker at work" className={styles.carouselimages} />
        <Image src={carpenterPicCar} alt="Carpenter making furniture" className={styles.carouselimages} />
        <Image src={carpenterPicWes} alt="Woodworker at work" className={styles.carouselimages} />
      </Carousel>

      <h1 className={styles.h1carousel}>
        Ein Leben lang gibt es nur eine Wahl
      </h1>
      <p className={styles.pcarousel}>
        Wir führen unsere Projekte für große Unternehmen
        <br /> sowie private Kunden sorgfältig und schnell durch.
      </p>
      <div className={styles.buttonwrapper}>
        <Link href="/projects" className={styles.btn}>
          Unsere Projekte
        </Link>
      </div>
    </div>
  );
}