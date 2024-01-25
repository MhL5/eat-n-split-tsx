import { type FC } from "react";

import SplitBillForm from "./SplitBillForm";

import { useBillContext } from "../context/BillContext";

const SplitBill: FC = function () {
  const { showSplitBill } = useBillContext();
  return <>{showSplitBill !== "" ? <SplitBillForm /> : null}</>;
};

export default SplitBill;
