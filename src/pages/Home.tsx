import { useEffect, useState } from "react";
import Card from "../components/Card";
import BottomNav from "../components/BottomNav";
import TransactionItem from "../components/Transactions/transactionItem";
import HomeAppBar from "../components/homeAppBar";

import {
  fetchWallet,
  walletInterface,
  transaction,
  fetchRecentTransaction,
} from "../Api";

import styles from "./home.module.css";

function Home() {
  const [wallet, setWallet] = useState<walletInterface>({} as walletInterface);
  const [transactions, setTransactions] = useState<transaction[]>(
    [] as transaction[]
  );
  useEffect(() => {
    fetchWallet(4).then((w) => setWallet(w));
    fetchRecentTransaction(4).then((t) => setTransactions(t));
  }, []);

  console.log(transactions);


  const navigateDetail=()=>{

  }
  return (
    <div className={styles.container}>
      <HomeAppBar />
      <div className={styles.card}>
        <Card balance={wallet.balance} UserId={wallet.UserId} />
      </div>
      <div className={styles.stmt}>
        <h4>Recent Transactions</h4>
        {transactions.length === 0 ? (
          <p>No Transaction Found</p>
        ) : (
          transactions.map((trans) => (
            <TransactionItem
              key={trans.transactionId}
              comment={trans.comment}
              amount={trans.amount}
              date={trans.valueTime}
              transactionType={trans.transactionType}
             
            />
          ))
        )}
      </div>

      <div className={styles.bottomNav}>
        <BottomNav nav="home" />
      </div>
    </div>
  );
}

export default Home;
