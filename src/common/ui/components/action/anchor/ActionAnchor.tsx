import TailwindStyle from "common/tailwind/TailwindStyle";
import ColorProps from "common/ui/common/props/ColorProps";
import StyleableProps from "common/ui/common/props/StyleableProps";
import TextContentProps from "common/ui/common/props/TextContentProps";
import {
  textColorHoverableStyle,
  textColorStyle
} from "common/ui/style/CommonStyles";
import { FunctionComponent } from "react";

const getClassName = (props: ActionAnchorProps) =>
  TailwindStyle.builder()
    .add(textColorStyle(props))
    .add(textColorHoverableStyle(props))
    .get();

export interface ActionAnchorProps
  extends StyleableProps,
    TextContentProps,
    ColorProps {
  url?: string;
}

const ActionAnchor: FunctionComponent<ActionAnchorProps> = (
  props: ActionAnchorProps
) => (
  <a className={getClassName(props)} href={props.url}>
    {props.content}
  </a>
);

export default ActionAnchor;
