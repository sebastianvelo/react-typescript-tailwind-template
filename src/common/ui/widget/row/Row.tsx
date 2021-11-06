import TailwindStyle from "common/tailwind/TailwindStyle";
import ParentProps from "common/ui/common/props/ParentProps";
import StyleableProps from "common/ui/common/props/StyleableProps";
import { FunctionComponent } from "react";

const getClassName = (props: RowProps) =>
  TailwindStyle.builder()
    .add(props.className)
    .add(`flex`)
    .addIf(`flex-col md:flex-row`, props.responsive)
    .addIf(`flex-wrap`, !props.responsive)
    .addIf(`flex-row-reverse`, props.reverse)
    .get();

interface RowProps extends ParentProps, StyleableProps {
  responsive?: boolean;
  reverse?: boolean;
}

const Row: FunctionComponent<RowProps> = (props: RowProps) => (
  <div className={getClassName(props)}>{props.children}</div>
);

export default Row;
