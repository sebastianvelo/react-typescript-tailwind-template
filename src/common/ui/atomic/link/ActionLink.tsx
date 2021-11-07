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
import { Link } from "react-router-dom";

const linkStyle = (props: ActionLinkProps) =>
  TailwindStyle.builder()
    .add(textColorStyle(props))
    .add(textColorHoverableStyle(props))
    .get();

export interface ActionLinkProps
  extends StyleableProps,
    TextContentProps,
    ColorProps,
    ParentProps {
  route?: string;
}

const ActionLink: FunctionComponent<ActionLinkProps> = (
  props: ActionLinkProps
) => (
  <Link to={props.route ?? ""} className={linkStyle(props)}>
    {props.children ?? props.content}
  </Link>
);

export default ActionLink;
