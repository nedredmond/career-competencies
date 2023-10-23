import circleIcon from "@phosphor-icons/core/regular/circle.svg";
import circleCheckedIcon from "@phosphor-icons/core/regular/check-circle.svg";
import { PhosphorIcon } from "@khanacademy/wonder-blocks-icon";
import Clickable from "@khanacademy/wonder-blocks-clickable";
import type { CheckboxProps } from "./types";

export const Checkbox = ({
  labelledBy,
  checked,
  handleClick,
  ...props
}: CheckboxProps) => (
  <Clickable
    role="checkbox"
    onClick={handleClick}
    aria-labelledby={labelledBy}
    aria-checked={checked}
  >
    {() => (
      <PhosphorIcon
        icon={checked ? circleCheckedIcon : circleIcon}
        size="xlarge"
        {...props}
      />
    )}
  </Clickable>
);
