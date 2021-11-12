import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { FunctionComponent } from "react";
import NavigationActionsWrapper, {
  NavigationActionsWrapperProps
} from "./NavigationActionsWrapper";

const navigationActionsStyle = (props: NavigationActionsProps) =>
  TailwindStyle.builder()
    .add(`sm:opacity-100 sm:flex-row sm:z-auto`)
    .add("flex flex-col space-y-2 pt-2 space-x-6 items-center w-full z-40")
    .add(`transition-all duration-400`)
    .addIf("opacity-95", props.isOpen)
    .addIf("opacity-0", !props.isOpen)
    .get();

export interface NavigationActionsProps extends NavigationActionsWrapperProps {}

const NavigationActions: FunctionComponent<NavigationActionsProps> = (
  props: NavigationActionsProps
) => (
  <div className={navigationActionsStyle(props)}>
    <NavigationActionsWrapper {...props} />
  </div>
);

export default NavigationActions;
