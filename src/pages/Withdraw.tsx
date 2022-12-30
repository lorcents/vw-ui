import ButtonAppBar from "../components/appBar";
import PaymentForm from "../components/reqpayForm";

import pesalink from "../PesaLink.png";
import styles from "./req.module.css";
export default function WithDraw() {
  return (
    <div className={styles.container}>
      <ButtonAppBar title="Withdraw" />

      <div className={styles.form}>
        <div className={styles.img}>
          <img src={pesalink} alt="Lipa Na Mpesa" width="200px"></img>
        </div>
        <PaymentForm  title="withdraw"/>
      </div>
    </div>
  );
}
