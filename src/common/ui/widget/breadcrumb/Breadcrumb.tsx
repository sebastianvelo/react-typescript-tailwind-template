import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionLink, {
  ActionLinkProps
} from "common/ui/components/action/link/ActionLink";
import { FunctionComponent } from "react";

const isLastLevel = (i: number, props: BreadcrumbProps) =>
  i === props.levels.length - 1;

const getColor = (i: number, props: BreadcrumbProps) =>
  !isLastLevel(i, props) ? "info" : "dark";
interface BreadcrumbProps {
  levels: ActionLinkProps[];
}

const Breadcrumb: FunctionComponent<BreadcrumbProps> = (props) => (
  <div className={`space-x-2`}>
    {props.levels.map((level, i) => (
      <>
        <ActionLink {...level} color={getColor(i, props)} />
        {!isLastLevel(i, props) && (
          <FontAwesomeIcon icon={faChevronRight} className={`text-xs`} />
        )}
      </>
    ))}
  </div>
);

export default Breadcrumb;
