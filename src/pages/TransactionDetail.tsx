import { useEffect, useState } from "react";
import ButtonAppBar from "../components/appBar";
import { useLocation } from "react-router-dom";

import styles from "./css/transactiondetail.module.css";

import { FormartDateTime } from "../util";

export default function Transtactiondetail() {
  const location = useLocation();
  //the data here will be an object since an object was
  const data = location.state;
  const [bgColor, setbgColor] = useState("#eaf0fe");
  const [minus, setMinus] = useState("");
  useEffect(() => {
    if (data.transactionType === "debit") {
      setbgColor("#fdf3f1");
      setMinus("-");
    }
  }, [data]);

  const valuetime = FormartDateTime(data.date);
  const con = FormartDateTime(data.con);

  const title = `${valuetime.day} ${valuetime.month} ${valuetime.year} ${valuetime.formattedTime}`;
  const Con = `${con.day} ${con.month} ${con.year} ${con.formattedTime}`;
  return (
    <div className={styles.container}>
      <div>
        <ButtonAppBar title={title} />
      </div>

      <div className={styles.card} style={{ backgroundColor: bgColor }}>
        <h3> {data.transactionType}</h3>
        <p>TransId:{data.transId}</p>
        <h1>{`${minus} ${data.amount}`}</h1>
        <h4>Cost:{data.cost}</h4>
        <h4>{data.comment}</h4>
        <p>Created On:{Con}</p>
        <p>Value Time :{title}</p>
      </div>
      <div></div>
    </div>
  );
}
