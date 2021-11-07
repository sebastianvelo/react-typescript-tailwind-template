import useToggle from "common/hooks/useToggle";
import { ActionButtonProps } from "common/ui/atomic/button/ActionButton";
import { FunctionComponent } from "react";
import Dropdown from "../../atomic/dropdown/Dropdown";
import Content, { ContentProps } from "./content/Content";
import Trigger from "./trigger/Trigger";

interface ButtonDropdownProps extends ActionButtonProps, ContentProps {}

const ButtonDropdown: FunctionComponent<ButtonDropdownProps> = (
  props: ButtonDropdownProps
) => {
  const [isOpen, toggleOpen] = useToggle();
  return (
    <Dropdown
      trigger={<Trigger {...props} toggle={toggleOpen} isOpen={isOpen} />}
      content={<Content {...props} />}
    />
  );
};

export default ButtonDropdown;
