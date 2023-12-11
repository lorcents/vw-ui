// import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import Button from "@mui/material/Button";
import styles from "./card.module.css";

import Divider from "@mui/material/Divider";
export default function Card(props: { balance: number; UserId: string }) {
  return (
    <div className={styles.card}>
      <div className={styles.titleContainer}>
        <h3>
          Ian | {props.UserId}
          {/* <ExpandMoreRoundedIcon /> */}
        </h3>
        <div className={styles.btnDiv}></div>
        <Button size="small" className={styles.btn} variant="outlined">
          <p>Hide Balance</p>
        </Button>
      </div>
      <Divider variant="middle" />

      <div className={styles.balContainer}>
        <p>Your Balance </p>
        <h2>KSH {props.balance || 0}</h2>
      </div>
    </div>
  );
}
