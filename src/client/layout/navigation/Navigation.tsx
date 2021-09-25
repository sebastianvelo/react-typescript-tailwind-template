import Action, { ActionProps } from "components/action/Action";
import { FunctionComponent } from "react";

export interface NavigationProps {
  header?: string;
  actions?: ActionProps[];
}

const Navigation: FunctionComponent<NavigationProps> = (
  props: NavigationProps
) => {
  return (
    <nav>
      <header>{props.header}</header>
      <div>
        {props.actions?.map((action) => (
          <Action {...action} />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
