import { type FC } from "react";
import styles from "./Friend.module.scss";

const Friend: FC<{
  name: string;
  balance: number;
  imgUrl: string;
  showSplitBill: string;
  setShowSplitBill: React.Dispatch<React.SetStateAction<string>>;
}> = function ({ name, balance, imgUrl, setShowSplitBill, showSplitBill }) {
  function handleSetShowSplitBill() {
    setShowSplitBill(name === showSplitBill ? "" : name);
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
          <button onClick={handleSetShowSplitBill}>
            {showSplitBill === name ? `Close` : `Select`}
          </button>
        </div>
      </li>
    </>
  );
};

export default Friend;
