import { type FC } from "react";

import Friend from "./Friend";

import { useBillContext } from "../context/BillContext";

const Friends: FC = function () {
  const { friends } = useBillContext();

  return (
    <>
      {friends.map((friend) => (
        <Friend
          key={friend.name}
          name={friend.name}
          balance={friend.balance}
          imgUrl={friend.imgUrl}
        />
      ))}
    </>
  );
};

export default Friends;
