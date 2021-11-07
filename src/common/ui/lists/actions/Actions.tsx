import Action, { ActionProps } from "common/ui/components/action/Action";
import Row from "common/ui/layout/row/Row";
import { FunctionComponent } from "react";

export interface ActionsProps {
  actions?: ActionProps[];
}

const Actions: FunctionComponent<ActionsProps> = (props: ActionsProps) => (
  <Row className="space-x-2 flex items-center">
    {props.actions?.map((action) => (
      <Action {...action} />
    ))}
  </Row>
);

export default Actions;
