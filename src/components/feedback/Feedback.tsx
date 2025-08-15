import { Carousel } from "antd";
import styles from "./Feedback.module.css";
import Rating from "../rating/Rating";

type FeedbackProps = {
  clientname: String[];
  customerreview: String[];
  rating: number;
};

export default function Feedback({
  clientname,
  customerreview,
  rating,
}: FeedbackProps) {
  return (
    <Carousel className={styles.carouselfeedback} autoplay={true}>
      <div>
        <h3 className={styles.customername}> {clientname[0]}</h3>
        <h3 className={styles.customerreview}>{customerreview[0]}</h3>
        <Rating userRating={rating}></Rating>
      </div>
      <div>
        <h3 className={styles.customername}> {clientname[1]}</h3>
        <h3 className={styles.customerreview}>{customerreview[1]}</h3>
        <Rating userRating={rating}></Rating>
      </div>
      <div>
        <h3 className={styles.customername}> {clientname[2]}</h3>
        <h3 className={styles.customerreview}>{customerreview[2]}</h3>
        <Rating userRating={rating}></Rating>
      </div>
      <div>
        <h3 className={styles.customername}> {clientname[3]}</h3>
        <h3 className={styles.customerreview}>{customerreview[3]}</h3>
        <Rating userRating={rating}></Rating>
      </div>
    </Carousel>
  );
}
