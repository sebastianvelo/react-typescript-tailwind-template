import Row from "common/ui/layout/row/Row";
import Color from "common/ui/lib/types/color/Color";
import Actions from "common/ui/lists/actions/Actions";
import { FunctionComponent, useState } from "react";
import PaginationControl from "./control/PaginationControl";

interface PaginationProps {
  size: number;
  quantityToShow: number;
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
  const half = Math.floor(props.quantityToShow / 2);
  const getPages = () =>
    Array(props.quantityToShow)
      .fill("")
      .map((_, i) => i + 1)
      .map((i) =>
        active < half
          ? i
          : active > props.size - half
          ? i + (props.size - Math.floor(props.quantityToShow))
          : i + (active - half)
      );

  return (
    <Row className={`space-x-2`}>
      <PaginationControl
        changePage={() => handleClick(active - 1)}
        disabled={active === 1}
        color={props.color}
      />
      <Actions
        className={`space-x-2`}
        actions={getPages().map((page) => ({
          content: `${page}`,
          color: props.color,
          quiet: page !== active,
          onClick: () => handleClick(page)
        }))}
      />
      <PaginationControl
        changePage={() => handleClick(active + 1)}
        disabled={active === props.size}
        color={props.color}
        right
      />
    </Row>
  );
};

export default Pagination;
