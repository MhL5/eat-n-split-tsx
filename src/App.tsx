import { type FC } from "react";

import styles from "./App.module.scss";

import AddFriend from "./component/AddFriend";
import SplitBill from "./component/SplitBill";
import Friends from "./component/Friends";

import { BillProvider } from "./context/BillContext";

const App: FC = function () {
  return (
    <BillProvider>
      <div className={styles.appContainer}>
        <main className={styles.main}>
          <section className={styles.left}>
            <Friends />
            <AddFriend />
          </section>

          <div className={styles.right}>
            <SplitBill />
          </div>
        </main>
      </div>
    </BillProvider>
  );
};

export default App;
