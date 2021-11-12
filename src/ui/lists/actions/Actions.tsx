import Action, { ActionProps } from "ui/components/action/Action";
import StyleableProps from "ui/common/props/StyleableProps";
import { FunctionComponent } from "react";

export interface ActionsProps extends StyleableProps {
  actions?: ActionProps[];
}

const Actions: FunctionComponent<ActionsProps> = (props: ActionsProps) => (
  <div className={props.className}>
    {props.actions?.map((action) => (
      <Action {...action} />
    ))}
  </div>
);

export default Actions;
