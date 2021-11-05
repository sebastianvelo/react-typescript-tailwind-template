import TailwindStyle from "common/tailwind/TailwindStyle";
import ColorProps from "common/ui/common/props/ColorProps";
import { bgColorStyle } from "common/ui/style/CommonStyles";
import { FunctionComponent } from "react";

const getClassName = (props: DotProps) =>
  TailwindStyle.builder()
    .add(`h-3 w-3 rounded-full`)
    .add(bgColorStyle(props))
    .get();

interface DotProps extends ColorProps {}

const Dot: FunctionComponent<DotProps> = (props: DotProps) => (
  <div className={getClassName(props)}></div>
);

export default Dot;
