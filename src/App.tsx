import { type FC } from "react";

import styles from "./App.module.scss";

import FormAddFriend from "./component/FormAddFriend";
import FormSplitBill from "./component/FormSplitBill";
import FriendsList from "./component/FriendsList";

import { BillProvider } from "./context/BillContext";

const App: FC = function () {
  return (
    <BillProvider>
      <div className={styles.appContainer}>
        <main className={styles.main}>
          <section className={styles.left}>
            <FriendsList />
            <FormAddFriend />
          </section>

          <div className={styles.right}>
            <FormSplitBill />
          </div>
        </main>
      </div>
    </BillProvider>
  );
};

export default App;
