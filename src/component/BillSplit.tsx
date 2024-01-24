import { useState, type FC, FormEvent } from "react";
import styles from "./BillSplit.module.scss";

const BillSplit: FC<{
  friends: {
    name: string;
    balance: number;
    imgUrl: string;
  }[];
  showSplitBill: string;
  setFriends: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        balance: number;
        imgUrl: string;
      }[]
    >
  >;
  setShowSplitBill: React.Dispatch<React.SetStateAction<string>>;
}> = function ({ friends, showSplitBill, setFriends, setShowSplitBill }) {
  const [bill, setBill] = useState(0);
  const [userExpense, setUserExpense] = useState(0);
  const [whoPaid, setWhoPaid] = useState("user");
  const friendExpense = bill - userExpense;

  const [{ name }] = friends.filter((friend) => friend.name === showSplitBill);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // update friendsState
    setFriends((friends) => {
      const res = friends.map((friend) => {
        if (friend.name === name) {
          // if i pay the money he ows grows (balance+) & he owes me
          // if he pays the balance money drops (balance-) & i owe him
          const calc =
            whoPaid === friend.name
              ? { ...friend, balance: friend.balance - userExpense }
              : { ...friend, balance: friend.balance + friendExpense };

          return calc;
        }

        return friend;
      });

      return res;
    });

    // reset states
    setBill(0);
    setUserExpense(0);
    setWhoPaid("user");
    setShowSplitBill("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Split a bill with {name}</h2>

      <div>
        <span>Bill value : </span>
        <input
          type="number"
          value={bill > 0 ? bill : ""}
          onChange={(e) => setBill(+e.target.value > 0 ? +e.target.value : 0)}
        />
      </div>

      <div>
        <span>Your expenses : </span>
        <input
          type="number"
          value={userExpense > 0 ? userExpense : ""}
          onChange={(e) =>
            setUserExpense(+e.target.value > 0 ? +e.target.value : 0)
          }
        />
      </div>

      <div>
        <span>{name} expense : </span>
        <input type="number" disabled value={friendExpense} />
      </div>

      <select value={whoPaid} onChange={(e) => setWhoPaid(e.target.value)}>
        <option value="user">You</option>
        <option value={name}>{name}</option>
      </select>

      <button>Confirm</button>
    </form>
  );
};

export default BillSplit;
