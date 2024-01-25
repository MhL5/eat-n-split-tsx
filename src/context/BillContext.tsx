import {
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

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

type BillContextType = {
  friends: {
    name: string;
    balance: number;
    imgUrl: string;
  }[];
  setFriends: Dispatch<
    SetStateAction<
      {
        name: string;
        balance: number;
        imgUrl: string;
      }[]
    >
  >;
  showSplitBill: string;
  setShowSplitBill: Dispatch<SetStateAction<string>>;
};
const BillContext = createContext<BillContextType | null>(null);

const BillProvider: FC<PropsWithChildren> = function ({ children }) {
  const [friends, setFriends] = useState(dummyData);
  const [showSplitBill, setShowSplitBill] = useState("");

  const ctx = { friends, setFriends, showSplitBill, setShowSplitBill };

  return <BillContext.Provider value={ctx}> {children} </BillContext.Provider>;
};

function useBillContext() {
  const context = useContext(BillContext);
  if (context === null)
    throw new Error("Context was called outside of it's provider 🙄");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useBillContext, BillProvider };
