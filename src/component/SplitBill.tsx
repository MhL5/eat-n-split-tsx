import { useState, type FC, type FormEvent } from "react";

import styles from "./SplitBill.module.scss";

import ExpenseInput from "./ExpenseInput";

import { useBillContext } from "../context/BillContext";

const SplitBill: FC = function () {
  const [bill, setBill] = useState(0);
  const [userExpense, setUserExpense] = useState(0);
  const [whoPaid, setWhoPaid] = useState("user");
  const {
    FriendsList,
    showFormSplitBill,
    setFriendsList,
    setShowFormSplitBill,
  } = useBillContext();

  const friendExpense = bill - userExpense;

  const [{ name }] = FriendsList.filter(
    (friend) => friend.name === showFormSplitBill
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // update FriendsListState
    setFriendsList((FriendsList) => {
      const res = FriendsList.map((friend) => {
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
    setShowFormSplitBill("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Split a bill with {name}</h2>

      <ExpenseInput
        value={bill}
        text="Bill value : "
        onChange={(e) => setBill(+e.target.value >= 0 ? +e.target.value : 0)}
      />

      <ExpenseInput
        value={userExpense}
        text="Your expenses : "
        onChange={(e) =>
          setUserExpense(+e.target.value >= 0 ? +e.target.value : 0)
        }
      />

      <ExpenseInput
        text={` ${name} expense : `}
        value={friendExpense}
        disabled
      />

      <select value={whoPaid} onChange={(e) => setWhoPaid(e.target.value)}>
        <option value="user">You</option>
        <option value={name}>{name}</option>
      </select>

      <button>Confirm</button>
    </form>
  );
};

export default SplitBill;
