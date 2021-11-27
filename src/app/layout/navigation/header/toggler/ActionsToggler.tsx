import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

export interface ActionsTogglerProps {
  toggleLinks?: () => void;
}

const ActionsToggler: FunctionComponent<ActionsTogglerProps> = (
  props: ActionsTogglerProps
) => (
  <div className={`block sm:hidden`} onClick={props.toggleLinks!}>
    <FontAwesomeIcon icon={faHamburger} className={`text-xs`} />
  </div>
);

export default ActionsToggler;
