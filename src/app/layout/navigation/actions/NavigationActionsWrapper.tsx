import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import ActionLink, { ActionLinkProps } from "ui/atomic/link/ActionLink";
import { FunctionComponent } from "react";

const navigationActionsStyle = (props: NavigationActionsWrapperProps) =>
  TailwindStyle.builder()
    .add("flex-col w-full absolute h-screen bg-primary px-2 space-x-8")
    .add(
      "sm:flex sm:space-y-0 sm:h-full sm:flex-row sm:relative sm:px-0 sm:justify-center"
    )
    .addIf("flex", props.isOpen)
    .addIf("hidden", !props.isOpen)
    .get();

export interface NavigationActionsWrapperProps {
  actions?: ActionLinkProps[];
  toggleLinks?: () => void;
  isOpen?: boolean;
}

const NavigationActionsWrapper: FunctionComponent<NavigationActionsWrapperProps> =
  (props: NavigationActionsWrapperProps) => (
    <div className={navigationActionsStyle(props)}>
      {props.actions?.map((action) => (
        <ActionLink {...action} key={action.content} />
      ))}
    </div>
  );

export default NavigationActionsWrapper;
