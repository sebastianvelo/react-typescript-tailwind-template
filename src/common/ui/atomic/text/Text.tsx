import TailwindStyle from "common/tailwind/TailwindStyle";
import ColorProps from "common/ui/lib/props/ColorProps";
import SizeProps from "common/ui/lib/props/SizeProps";
import TextContentProps from "common/ui/lib/props/TextContentProps";
import { textColorStyle, textSizeStyle } from "common/ui/lib/style/CommonStyles";
import { FunctionComponent } from "react";

const textStyle = (props: TextProps) =>
  TailwindStyle.builder()
    .add(`text-justify`)
    .add(textSizeStyle(props))
    .add(textColorStyle(props))
    .get();

export interface TextProps extends TextContentProps, ColorProps, SizeProps {}

const Text: FunctionComponent<TextProps> = (props: TextProps) => (
  <p className={textStyle(props)}>{props.content}</p>
);

export default Text;
