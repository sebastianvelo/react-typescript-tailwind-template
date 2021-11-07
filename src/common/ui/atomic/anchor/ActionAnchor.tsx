import TailwindStyle from "common/tailwind/TailwindStyle";
import ColorProps from "common/ui/lib/props/ColorProps";
import ParentProps from "common/ui/lib/props/ParentProps";
import StyleableProps from "common/ui/lib/props/StyleableProps";
import TextContentProps from "common/ui/lib/props/TextContentProps";
import {
  textColorHoverableStyle,
  textColorStyle
} from "common/ui/lib/style/CommonStyles";
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
