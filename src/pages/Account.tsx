import BottomNav from "../components/BottomNav";

import styles from "./account.module.css";
export default function Account() {
  return (
    <div className={styles.container}>
      <div className={styles.bottomNav}>
        <BottomNav nav="account" />
      </div>
    </div>
  );
}
