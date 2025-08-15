import Feedback from "../../../components/feedback/Feedback";
import styles from "../Home.module.css";

export default function FeedbackSection() {
  return (
    <div className={styles.contactcontainer}>
      <Feedback
        clientname={["lisa", "bernd", "name", "mikdad"]}
        customerreview={["text1", "text2", "text3", "text4"]}
        rating={4.0}
      />
    </div>
  );
}