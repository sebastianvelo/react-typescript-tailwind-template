import useToggle from "common/hooks/useToggle";
import { FunctionComponent } from "react";
import NavigationActions, { NavigationActionsProps } from "./actions/NavigationActions";
import NavigationHeader, { NavigationHeaderProps } from "./header/NavigationHeader";

export interface NavigationProps extends NavigationHeaderProps, NavigationActionsProps { }

const Navigation: FunctionComponent<NavigationProps> = (props: NavigationProps) => {
  const [isOpen, toggle] = useToggle();

  return (
    <nav className={`flex flex-col items-center bg-primary text-dark divide-y-1 divide-red-900`}>
      <NavigationHeader {...props} toggleLinks={() => toggle()} />
      <NavigationActions {...props} isOpen={isOpen} toggleLinks={() => toggle()} />
    </nav>
  );
};

export default Navigation;
