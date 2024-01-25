import { type FC } from "react";

import styles from "./Friend.module.scss";

import { useBillContext } from "../context/BillContext";

const Friend: FC<{ name: string; balance: number; imgUrl: string }> =
  function ({ name, balance, imgUrl }) {
    const { setShowFormSplitBill, showFormSplitBill } = useBillContext();

    function handleSetShowFormSplitBill() {
      setShowFormSplitBill(name === showFormSplitBill ? "" : name);
    }

    return (
      <>
        <li className={styles.card}>
          <div className={styles.avatar}>
            <img src={imgUrl} alt="" />
          </div>
          <div className={styles.info}>
            <div>{name}</div>
            <div>
              {balance > 0 && `he owes you ${balance}`}
              {balance < 0 && `You owe him ${balance}`}
              {balance === 0 && `you and ${name} are even`}
            </div>
          </div>
          <div className={styles.button}>
            <button onClick={handleSetShowFormSplitBill}>
              {showFormSplitBill === name ? `Close` : `Select`}
            </button>
          </div>
        </li>
      </>
    );
  };

export default Friend;
