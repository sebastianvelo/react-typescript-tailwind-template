import TailwindStyle from "common/tailwind/TailwindStyle";
import ColorProps from "common/ui/lib/props/ColorProps";
import ParentProps from "common/ui/lib/props/ParentProps";
import StyleableProps from "common/ui/lib/props/StyleableProps";
import TextContentProps from "common/ui/lib/props/TextContentProps";
import {
  bgColorStyle,
  bgColorHoverableStyle,
  borderColorStyle,
  bgColorQuietHoverableStyle,
  transitionStyle,
  textColorStyle,
} from "common/ui/lib/style/CommonStyles";
import { FunctionComponent } from "react";

const buttonStyle = (props: ActionButtonProps) =>
  TailwindStyle.builder()
    .add(`rounded-md text-center px-4 py-2 border`)
    .add(transitionStyle())
    .addIf(bgColorStyle(props), !props.quiet)
    .addIf(bgColorHoverableStyle(props), !props.quiet)
    .add(borderColorStyle(props))
    .addIf(bgColorQuietHoverableStyle(props), props.quiet)
    .addIf(textColorStyle({}), props.quiet)
    .add(props.className)
    .get();

export interface ActionButtonProps
  extends TextContentProps,
    StyleableProps,
    ColorProps,
    ParentProps {
  onClick?: (...x: any[]) => void;
  quiet?: boolean;
}

const ActionButton: FunctionComponent<ActionButtonProps> = (
  props: ActionButtonProps
) => (
  <button className={buttonStyle(props)} onClick={props.onClick}>
    {props.children ?? props.content}
  </button>
);

export default ActionButton;
