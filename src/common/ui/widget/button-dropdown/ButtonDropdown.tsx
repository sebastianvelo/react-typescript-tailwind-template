import useToggle from "common/hooks/useToggle";
import { FunctionComponent } from "react";
import { ActionButtonProps } from "../../components/action/button/ActionButton";
import Dropdown from "../../components/dropdown/Dropdown";
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
