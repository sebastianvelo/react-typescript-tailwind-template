import Action, { ActionProps } from "components/action/Action";
import { FunctionComponent } from "react";

export interface NavigationActionsProps {
  actions?: ActionProps[];
}

const NavigationActions: FunctionComponent<NavigationActionsProps> = (
  props: NavigationActionsProps
) => {
  return (
    <div className={``}>
      {props.actions?.map((action) => (
        <Action {...action} />
      ))}
    </div>
  );
};

export default NavigationActions;
