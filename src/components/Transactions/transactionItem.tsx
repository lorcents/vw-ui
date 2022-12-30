import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TransactionDate from "./transactionDate";
import styles from "./transactionItem.module.css";

function TransactionItem(props: {
  comment: string;
  date: Date;
  amount: number;
  transactionType: string;
}) {
  const navigation = useNavigate();
  const [bgColor, setbgColor] = useState("#eaf0fe");
  useEffect(() => {
    if (props.transactionType === "debit") {
      setbgColor("#fdf3f1");
    }
  }, [props]);

  const navigateDetail = () => {
    // console.log("clicked");
    navigation("/transactDetail");
  };

  return (
    <div
      className={styles["transaction-item"]}
      style={{ backgroundColor: bgColor }}
      onClick={navigateDetail}
    >
      <div className={styles["transaction-item__date"]}>
        <TransactionDate dateString={props.date} />
      </div>

      <div className={styles["transaction-item__description"]}>
        <p>{props.comment}</p>
      </div>
      <div className={styles["transaction-item__amount"]}>{props.amount}</div>
    </div>
  );
}

export default TransactionItem;
