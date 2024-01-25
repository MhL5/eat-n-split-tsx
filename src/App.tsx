import { type FC } from "react";

import styles from "./App.module.scss";

import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

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
