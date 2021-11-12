import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import ColorProps from "ui/common/props/ColorProps";
import SizeProps from "ui/common/props/SizeProps";
import TextContentProps from "ui/common/props/TextContentProps";
import { textColorStyle, textSizeStyle } from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";

const textStyle = (props: TextProps) =>
  TailwindStyle.builder()
    .add("text-justify")
    .add(textSizeStyle(props))
    .add(textColorStyle(props))
    .get();

export interface TextProps extends TextContentProps, ColorProps, SizeProps {}

const Text: FunctionComponent<TextProps> = (props: TextProps) => (
  <p className={textStyle(props)}>{props.content}</p>
);

export default Text;
