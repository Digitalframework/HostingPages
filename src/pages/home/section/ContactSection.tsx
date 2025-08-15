import ContactInfo from "@/components/contactinfo/contactinfo";
import Form from "../../../components/form/MainForm";
import styles from "../Home.module.css";

export default function ContactSection() {
  return (
    <div className={styles.formcontainer}>
      <div className={styles.contactinfowrapper}>
        <ContactInfo
          phonenumber="0124 1415"
          email="email@email.de"
          adress="Nummer 2"
        />
        <Form />
      </div>
    </div>
  );
}