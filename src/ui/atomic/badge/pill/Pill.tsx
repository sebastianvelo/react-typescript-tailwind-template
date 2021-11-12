import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import ColorProps from "ui/common/props/ColorProps";
import TextContentProps from "ui/common/props/TextContentProps";
import { bgColorStyle } from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";

const pillStyle = (props: PillProps) =>
  TailwindStyle.builder()
    .add("rounded-xl text-center px-3 font-bold")
    .add(bgColorStyle(props))
    .get();

interface PillProps extends TextContentProps, ColorProps {}

const Pill: FunctionComponent<PillProps> = (props: PillProps) => (
  <div className={pillStyle(props)}>{props.content?.toUpperCase()}</div>
);

export default Pill;
