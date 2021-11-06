import TailwindStyle from "common/tailwind/TailwindStyle";
import ColorProps from "common/ui/common/props/ColorProps";
import StyleableProps from "common/ui/common/props/StyleableProps";
import TextContentProps from "common/ui/common/props/TextContentProps";
import {
  textColorHoverableStyle,
  textColorStyle
} from "common/ui/style/CommonStyles";
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
    ColorProps {
  route?: string;
}

const ActionLink: FunctionComponent<ActionLinkProps> = (
  props: ActionLinkProps
) => (
  <Link to={props.route ?? ""} className={linkStyle(props)}>
    {props.content}
  </Link>
);

export default ActionLink;
