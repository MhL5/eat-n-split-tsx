import {
  type FC,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
} from "react";

type ExpenseInput = {
  value: number;
  text: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & ComponentPropsWithoutRef<"input">;

const ExpenseInput: FC<ExpenseInput> = function (props) {
  const { value, onChange, text, ...otherProps } = props;

  return (
    <div>
      <span> {text} </span>
      <input
        type="number"
        value={value >= 0 ? value : 0}
        onChange={onChange}
        {...otherProps}
      />
    </div>
  );
};

export default ExpenseInput;
