import Image from "next/image";
import { Card, Row, Col } from "antd";
import TreeSideways from "../../picture/Tree_sideways.png";
import Trunk from "../../picture/WoodenTrunk.png";
import styles from "../Home.module.css";

const { Meta } = Card;

export default function ProductSection() {
  return (
    <div className={styles.tilecontainer}>
      <div className={styles.productcontainer}>
        <Image src={TreeSideways} alt="Tree trunk sideways" loading="lazy" />
        <div className={styles.producttext}>
          <h2 className={styles.h2}>
            Unsere Handwerkskunst
            <hr className={styles.hrtop} />
          </h2>
          <p className={styles.p}>
            Unser Team aus erfahrenen Schreinern ist auf eine breite Palette von Schreinerarbeiten spezialisiert.
          </p>
        </div>
      </div>

      <div className={styles.backgroundcontainer}>
        <Image src={Trunk} alt="Wooden trunk" height={400} width={400} loading="lazy" />
      </div>

      <div className={styles.productinfo}>
        <Row gutter={16} justify="center">
          <Col span={8}>
            <Card
              bordered={false}
              cover={<img src="/images/Lerche.jpg" alt="Laminat" className={styles.cardImage} />}
            >
              <Meta title="Laminat" description="This is the description" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              bordered={false}
              cover={<img src="/images/Fichte.jpg" alt="Parkett" className={styles.cardImage} />}
            >
              <Meta title="Parkett" description="This is the description" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}