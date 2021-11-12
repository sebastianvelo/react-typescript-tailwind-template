import { FunctionComponent } from "react";
import ActionAnchor, { ActionAnchorProps } from "../../atomic/anchor/ActionAnchor";
import ActionButton, { ActionButtonProps } from "../../atomic/button/ActionButton";
import ActionLink, { ActionLinkProps } from "../../atomic/link/ActionLink";

const getComponent = (props: ActionProps) => {
  if (props.route) return <ActionLink {...props} />;
  if (props.onClick) return <ActionButton {...props} />;

  return <ActionAnchor {...props} />;
};

export interface ActionProps
  extends ActionLinkProps,
    ActionAnchorProps,
    ActionButtonProps {}

const Action: FunctionComponent<ActionProps> = (props: ActionProps) =>
  getComponent(props);

export default Action;
