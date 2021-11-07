import TailwindStyle from "common/tailwind/TailwindStyle";
import ColorProps from "common/ui/lib/props/ColorProps";
import TextContentProps from "common/ui/lib/props/TextContentProps";
import { bgColorStyle } from "common/ui/lib/style/CommonStyles";
import { FunctionComponent } from "react";

const pillStyle = (props: PillProps) =>
  TailwindStyle.builder()
    .add(`rounded-xl text-center px-3 font-bold`)
    .add(bgColorStyle(props))
    .get();

interface PillProps extends TextContentProps, ColorProps {}

const Pill: FunctionComponent<PillProps> = (props: PillProps) => (
  <div className={pillStyle(props)}>{props.content?.toUpperCase()}</div>
);

export default Pill;
