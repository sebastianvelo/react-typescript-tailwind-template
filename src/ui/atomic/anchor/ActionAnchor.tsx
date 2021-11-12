import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import ColorProps from "ui/common/props/ColorProps";
import ParentProps from "ui/common/props/ParentProps";
import StyleableProps from "ui/common/props/StyleableProps";
import TextContentProps from "ui/common/props/TextContentProps";
import {
  textColorHoverableStyle,
  textColorStyle
} from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";

const anchorStyle = (props: ActionAnchorProps) =>
  TailwindStyle.builder()
    .add(textColorStyle(props))
    .add(textColorHoverableStyle(props))
    .get();

export interface ActionAnchorProps
  extends StyleableProps,
    TextContentProps,
    ColorProps,
    ParentProps {
  url?: string;
}

const ActionAnchor: FunctionComponent<ActionAnchorProps> = (
  props: ActionAnchorProps
) => (
  <a className={anchorStyle(props)} href={props.url}>
    {props.children ?? props.content}
  </a>
);

export default ActionAnchor;
