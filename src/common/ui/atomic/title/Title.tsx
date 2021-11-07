import TailwindStyle from "common/tailwind/TailwindStyle";
import ColorProps from "common/ui/lib/props/ColorProps";
import SizeProps from "common/ui/lib/props/SizeProps";
import StyleableProps from "common/ui/lib/props/StyleableProps";
import TextContentProps from "common/ui/lib/props/TextContentProps";
import { textColorStyle, textSizeStyle } from "common/ui/lib/style/CommonStyles";
import { FunctionComponent } from "react";

const titleStyle = (props: TitleProps) =>
  TailwindStyle.builder()
    .add(`font-bold`)
    .add(props.className)
    .add(textSizeStyle(props))
    .add(textColorStyle(props))
    .get();

export interface TitleProps extends TextContentProps, ColorProps, SizeProps, StyleableProps {}

const Title: FunctionComponent<TitleProps> = (props: TitleProps) => (
  <h1 className={titleStyle(props)}>{props.content}</h1>
);

export default Title;
