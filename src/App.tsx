import { useState, type FC } from "react";
import Friend from "./component/Friend";
import styles from "./App.module.scss";
import AddFriend from "./component/AddFriend";
import BillSplit from "./component/BillSplit";

const dummyData = [
  {
    name: `ali`,
    balance: 10,
    imgUrl: `https://i.pravatar.cc/48?u=499476`,
  },
  {
    name: `Reza`,
    balance: 70,
    imgUrl: `https://i.pravatar.cc/48?u=419476`,
  },
  {
    name: `zez`,
    balance: -10,
    imgUrl: `https://i.pravatar.cc/48?u=493276`,
  },
  {
    name: `amir`,
    balance: 0,
    imgUrl: `https://i.pravatar.cc/48?u=493476`,
  },
];

const App: FC = function () {
  const [friends, setFriends] = useState(dummyData);
  const [showSplitBill, setShowSplitBill] = useState("");

  return (
    <div className={styles.appContainer}>
      <main className={styles.main}>
        <section className={styles.left}>
          {friends.map((friend) => (
            <Friend
              key={friend.name}
              name={friend.name}
              balance={friend.balance}
              imgUrl={friend.imgUrl}
              setShowSplitBill={setShowSplitBill}
              showSplitBill={showSplitBill}
            />
          ))}
          <AddFriend setFriends={setFriends} />
        </section>

        <div className={styles.right}>
          {showSplitBill !== "" ? (
            <BillSplit
              friends={friends}
              showSplitBill={showSplitBill}
              setFriends={setFriends}
              setShowSplitBill={setShowSplitBill}
            />
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default App;
