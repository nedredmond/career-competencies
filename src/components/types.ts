export type CheckboxProps = {
  labelledBy: string;
  checked: boolean;
  handleClick: () => void;
  [x: string | number | symbol]: unknown;
};
