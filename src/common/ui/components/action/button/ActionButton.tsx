import TailwindStyle from "common/tailwind/TailwindStyle";
import ColorProps from "common/ui/common/props/ColorProps";
import ParentProps from "common/ui/common/props/ParentProps";
import StyleableProps from "common/ui/common/props/StyleableProps";
import TextContentProps from "common/ui/common/props/TextContentProps";
import {
  bgColorStyle,
  bgColorHoverableStyle
} from "common/ui/style/CommonStyles";
import { FunctionComponent } from "react";

const getClassName = (props: ActionButtonProps) =>
  TailwindStyle.builder()
    .add(`rounded-md text-center px-4 py-2 font-bold`)
    .add(bgColorStyle(props))
    .add(bgColorHoverableStyle(props))
    .add(props.className)
    .get();

export interface ActionButtonProps
  extends TextContentProps,
    StyleableProps,
    ColorProps,
    ParentProps {
  onClick?: (...x: any[]) => void;
}

const ActionButton: FunctionComponent<ActionButtonProps> = (
  props: ActionButtonProps
) => (
  <button className={getClassName(props)} onClick={props.onClick}>
    {props.children ?? props.content}
  </button>
);

export default ActionButton;
