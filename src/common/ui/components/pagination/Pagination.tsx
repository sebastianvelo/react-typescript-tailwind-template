import ActionButton from "common/ui/atomic/button/ActionButton";
import Color from "common/ui/lib/types/color/Color";
import Actions from "common/ui/lists/actions/Actions";
import { FunctionComponent, useState } from "react";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Row from "common/ui/layout/row/Row";

interface PaginationProps {
  size?: number;
  active?: number;
  onClick?: (page: number) => void;
  color?: Color;
}

// eslint-disable-next-line arrow-body-style
const Pagination: FunctionComponent<PaginationProps> = (
  props: PaginationProps
) => {
  const [active, setActive] = useState(props.active ?? 1);

  const handleClick = (page: number) => {
    if (props.onClick) props.onClick(page);
    setActive(page);
  };
  return (
    <Row className={`space-x-2`}>
      <ActionButton
        quiet
        color={props.color}
        onClick={() => handleClick(active-1)}
        children={
          <FontAwesomeIcon icon={faChevronLeft} className={`w-3 h-3`} />
        }
      />
      <Actions
        className={`space-x-2`}
        actions={Array(props.size)
          .fill("")
          .map((_, page) => ({
            content: `${page + 1}`,
            color: props.color,
            quiet: page !== active,
            onClick: () => handleClick(page)
          }))}
      />
      <ActionButton
        quiet
        color={props.color}
        onClick={() => handleClick(active+1)}
        children={
          <FontAwesomeIcon icon={faChevronRight} className={`w-3 h-3`} />
        }
      />
    </Row>
  );
};

export default Pagination;
