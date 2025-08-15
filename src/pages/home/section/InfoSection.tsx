import Image from "next/image";
import Floor from "../../picture/pexels-digital-buggu-576470.jpg";
import WoodFibres from "../../picture/WoodFibres.jpg";
import Wood from "../../picture/pexels-alfo-medeiros-14569101.jpg";
import styles from "../Home.module.css";

export default function InfoSection() {
  return (
    <div className={styles.layoutcontainer}>
      <div className={styles.infotext}>
        <div className={styles.textwrapper}>
          <Image src={Floor} alt="Wooden flooring" />
          <Image src={WoodFibres} alt="Wood fibres" />
        </div>

        <div className={styles.textwrap}>
          <Image src={Wood} alt="Beautiful wood grain" />
          <h2 className={styles.h2}>
            Unser Anspruch auf Detail
            <hr className={styles.hrtop} />
          </h2>
          <p className={styles.p}>
            Bei ABC Carpentry sind wir stolz darauf, bei jedem Projekt außergewöhnliche Handwerkskunst und hochwertigen Kundenservice zu bieten.
          </p>
          <hr className={styles.hr} />
          <h3 className={styles.h3}>
            Treten Sie mit dem Formular mit uns in Kontakt
          </h3>
        </div>
      </div>
    </div>
  );
}