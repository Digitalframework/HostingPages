import { Card, Carousel } from "antd";
import styles from './Feedback.module.css'
import Rating from "../rating/Rating";

type FeedbackProps = {
    clientname: String[];
    customerreview: String[];
    rating: number;

}


export default function Feedback({ clientname, customerreview,rating }: FeedbackProps) {

    return (
            <Carousel className={styles.carouselfeedback} autoplay={true} >
                <Card bordered={false} title={clientname[0]} className={styles.reviewCard}>
                    <h3 className={styles.customerreview}>{customerreview[0]}</h3>
                    <Rating/>
                </Card>
                <Card bordered={false} title={clientname[1]} className={styles.reviewCard}>
                    <h3 className={styles.customerreview}>{customerreview[1]}</h3>
                    <Rating/>
                </Card>
                <Card bordered={false} title={clientname[2]} className={styles.reviewCard}>
                    <h3 className={styles.customerreview}>{customerreview[2]}</h3>
                    <Rating/>
                </Card>
                <Card bordered={false} title={clientname[3]} className={styles.reviewCard}>
                    <h3 className={styles.customerreview}>{customerreview[3]}</h3>
                    <Rating/>
                </Card>
            </Carousel>

    )
}
