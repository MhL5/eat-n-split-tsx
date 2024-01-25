import { type FC } from "react";

import SplitBill from "./SplitBill";

import { useBillContext } from "../context/BillContext";

const FormSplitBill: FC = function () {
  const { showFormSplitBill } = useBillContext();
  return <>{showFormSplitBill !== "" ? <SplitBill /> : null}</>;
};

export default FormSplitBill;
