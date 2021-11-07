import {
  faChevronRight,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionButton, { ActionButtonProps } from "common/ui/atomic/button/ActionButton";
import { FunctionComponent } from "react";

interface TriggerProps extends ActionButtonProps {
  toggle: () => void;
  isOpen: boolean;
}

const Trigger: FunctionComponent<TriggerProps> = (props: TriggerProps) => (
  <ActionButton
    {...props}
    onClick={props.toggle}
    className={`flex justify-center items-center space-x-1`}
  >
    <div>{props.content}</div>
    <FontAwesomeIcon
      icon={props.isOpen ? faChevronDown : faChevronRight}
      className={`w-3 h-3`}
    />
  </ActionButton>
);

export default Trigger;
