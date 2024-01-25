import { type FC } from "react";

import Friend from "./Friend";

import { useBillContext } from "../context/BillContext";

const FriendsList: FC = function () {
  const { FriendsList } = useBillContext();

  return (
    <ul>
      {FriendsList.map((friend) => (
        <Friend
          key={friend.name}
          name={friend.name}
          balance={friend.balance}
          imgUrl={friend.imgUrl}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
