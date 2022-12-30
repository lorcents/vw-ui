import styles from "./transactionDate.module.css";

function TransactionDate(props: { dateString: Date }) {
  const date = new Date(props.dateString);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className={styles["transaction-date"]}>
      <div className={styles["transaction-date__date"]}>
        {day} ,{month}
      </div>

      <div className={styles["transaction-date__time"]}>{formattedTime}</div>
    </div>
  );
}

export default TransactionDate;
