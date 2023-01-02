import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TransactionDate from "./transactionDate";
import styles from "./transactionItem.module.css";

function TransactionItem(props: {
  transId: number;
  comment: string;
  date: Date;
  amount: number;
  transactionType: string;
  accNumber: string;
  con: Date;
  cost: number;
  walletId: number;
}) {
  const navigate = useNavigate();
  const [bgColor, setbgColor] = useState("#eaf0fe");
  const [minus, setMinus] = useState("");
  useEffect(() => {
    if (props.transactionType === "debit") {
      setbgColor("#fdf3f1");
      setMinus("-");
    }
  }, [props]);

  const navigateDetail = () => {
    // console.log("clicked");
    navigate("/transactDetail", {
      state: props,
    });
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
      <div
        className={styles["transaction-item__amount"]}
      >{`${minus}${props.amount}`}</div>
    </div>
  );
}

export default TransactionItem;
