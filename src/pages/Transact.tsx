import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

import styles from "./css/transact.module.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CallReceivedIcon from "@mui/icons-material/CallReceived";

export default function Transact() {
  const navigate = useNavigate();

  const reqHandler = () => {
    navigate("/reqPayment");
  };

  const withdrawHandler = () => {
    navigate("/withdraw");
  };
  return (
    <div className={styles.container}>
      <div className={styles.divContainer}>
        <div className={styles.clickableDiv} onClick={reqHandler}>
          {" "}
          Request Payment <CallReceivedIcon />
        </div>
        <div className={styles.clickableDiv} onClick={withdrawHandler}>
          WithDraw <ArrowOutwardIcon />
        </div>
      </div>
      <div className={styles.bottomNav}>
        <BottomNav nav="transact" />
      </div>
    </div>
  );
}
