import ColorProps from "ui/common/props/ColorProps";
import { FunctionComponent } from "react";
import Action from "../../action/Action";

interface CloseButtonProps extends ColorProps {
  onClose: () => void;
}

const CloseButton: FunctionComponent<CloseButtonProps> = (
  props: CloseButtonProps
) => (
  <Action
    content="x"
    color={props.color}
    onClick={props.onClose}
    className="absolute right-32 "
  />
);

export default CloseButton;
