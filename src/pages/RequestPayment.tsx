import ButtonAppBar from "../components/appBar";
import PaymentForm from "../components/reqpayForm";

import lnm from "../lnm.png";

import styles from "./css/req.module.css";
export default function RequestPayment() {
  return (
    <div className={styles.container}>
      <ButtonAppBar title="Request Payment" />

      <div className={styles.form}>
        <div className={styles.img}>
          <img src={lnm} alt="Lipa Na Mpesa" width="200px"></img>
        </div>
        <PaymentForm title="Request payment" />
      </div>
    </div>
  );
}
