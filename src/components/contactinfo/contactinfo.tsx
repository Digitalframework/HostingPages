import styles from './contactinfo.module.css'

type ContactinfoProps = {
    phonenumber: String;
    email: String;
    adress: String;

}


export default function ContactInfo({ phonenumber, email,adress }: ContactinfoProps) {

    return (
        <div className={styles.contactinfo}>
          <div className={styles.adressinfo}>
          <div className="numbercontainer">
            <img src="https://img.icons8.com/?size=70&id=9730&format=png&color=000000"></img>
            <h1>{phonenumber}</h1>
          </div>
          <div className="emailcontainer">
            <img src="https://img.icons8.com/?size=70&id=12623&format=png&color=000000"></img>
            <h2>{email}</h2>
          </div>
          <div className="adresscontainer">
        <img src="https://img.icons8.com/?size=70&id=2797&format=png&color=000000"></img>
          <h2>{adress}<br/> 40122 Stadt</h2>
          </div>
          </div>
      </div>

    )
}
