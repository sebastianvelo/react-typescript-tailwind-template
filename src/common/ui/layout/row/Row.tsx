import TailwindStyle from "common/tailwind/TailwindStyle";
import ParentProps from "common/ui/lib/props/ParentProps";
import StyleableProps from "common/ui/lib/props/StyleableProps";
import { FunctionComponent } from "react";

const rowStyle = (props: RowProps) =>
  TailwindStyle.builder()
    .add(props.className)
    .add(`flex`)
    .addIf(`flex-col`, props.responsive)
    .addIf(`flex-wrap`, !props.responsive)
    .addIf(`flex-row-reverse`, props.reverse)
    .addIf(`sm:flex-row`, props.sm || (!props.md || !props.lg || !props.xl))
    .addIf(`md:flex-row`, props.md)
    .addIf(`lg:flex-row`, props.lg)
    .addIf(`xl:flex-row`, props.xl)
    .get();

interface RowProps extends ParentProps, StyleableProps {
  responsive?: boolean;
  reverse?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
}

const Row: FunctionComponent<RowProps> = (props: RowProps) => (
  <div className={rowStyle(props)}>{props.children}</div>
);

export default Row;
