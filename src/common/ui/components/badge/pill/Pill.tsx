import TailwindStyle from "common/tailwind/TailwindStyle";
import ColorProps from "common/ui/common/props/ColorProps";
import TextContentProps from "common/ui/common/props/TextContentProps";
import { bgColorStyle } from "common/ui/style/CommonStyles";
import { FunctionComponent } from "react";

const getClassName = (props: PillProps) =>
  TailwindStyle.builder()
    .add(`rounded-xl text-center px-3 font-bold`)
    .add(bgColorStyle(props))
    .get();

interface PillProps extends TextContentProps, ColorProps {}

const Pill: FunctionComponent<PillProps> = (props: PillProps) => (
  <div className={getClassName(props)}>{props.content?.toUpperCase()}</div>
);

export default Pill;
