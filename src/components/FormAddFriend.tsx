import { useState, type FC, type FormEvent } from "react";

import styles from "./FormAddFriend.module.scss";

import { useBillContext } from "../context/BillContext";

const FormAddFriend: FC = function () {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const { setFriendsList } = useBillContext();

  const randomUrlDigit = Math.floor(100000 + Math.random() * 900000);
  const randomImg = `https://i.pravatar.cc/48?u=${randomUrlDigit}`;

  function handleFormAddFriend(e: FormEvent) {
    e.preventDefault();
    const newFriend = { name: name, balance: 0, imgUrl: randomImg };
    setFriendsList((sf) => [...sf, newFriend]);
    handleToggle();
  }

  function handleToggle() {
    setShowForm((sf) => !sf);
    setName("");
  }

  return (
    <div>
      {showForm && (
        <form onSubmit={handleFormAddFriend} className={styles.form}>
          <div>
            <span>Friend name :</span>
            <input
              type="text"
              placeholder="enter your friend name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <span>Image Url :</span>
            <input type="text" placeholder="img url" defaultValue={randomImg} />
          </div>

          <div>
            <button>Add</button>
          </div>
        </form>
      )}

      <button onClick={handleToggle} style={{ margin: `1rem` }}>
        {showForm ? "Close" : "Add a new friend"}
      </button>
    </div>
  );
};

export default FormAddFriend;
