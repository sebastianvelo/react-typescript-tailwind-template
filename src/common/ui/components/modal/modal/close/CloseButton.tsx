import Action from "common/ui/components/action/Action";
import { CardProps } from "common/ui/components/card/Card";
import { FunctionComponent } from "react";

export interface CloseButtonProps extends CardProps {
  toggle?: () => void;
}

const CloseButton: FunctionComponent<CloseButtonProps> = (props: CloseButtonProps) => (
  <Action
    content="X"
    color={"danger"}
    onClick={props.toggle}
    className="absolute right-0 mr-6"
  />
);

export default CloseButton;
