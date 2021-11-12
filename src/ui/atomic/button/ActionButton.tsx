import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import ColorProps from "ui/common/props/ColorProps";
import ParentProps from "ui/common/props/ParentProps";
import SizeProps from "ui/common/props/SizeProps";
import StyleableProps from "ui/common/props/StyleableProps";
import TextContentProps from "ui/common/props/TextContentProps";
import {
  bgColorStyle,
  bgColorHoverableStyle,
  borderColorStyle,
  bgColorQuietHoverableStyle,
  transitionStyle,
  textColorStyle,
  buttonSizeStyle,
} from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";

const buttonStyle = (props: ActionButtonProps) =>
  TailwindStyle.builder()
    .add(props.className)
    .add("rounded-md text-center border")
    .add(buttonSizeStyle(props))
    .add(transitionStyle())
    .addIf(bgColorStyle(props), !props.quiet)
    .addIf(bgColorHoverableStyle(props), !props.quiet)
    .add(borderColorStyle(props))
    .addIf(bgColorQuietHoverableStyle(props), props.quiet)
    .addIf(textColorStyle({}), props.quiet)
    .get();

export interface ActionButtonProps
  extends TextContentProps,
    StyleableProps,
    ColorProps,
    ParentProps,
    SizeProps {
  onClick?: (...x: any[]) => void;
  quiet?: boolean;
  disabled?: boolean;
}

const ActionButton: FunctionComponent<ActionButtonProps> = (
  props: ActionButtonProps
) => (
  <button disabled={props.disabled} className={buttonStyle(props)} onClick={props.onClick}>
    {props.children ?? props.content}
  </button>
);

export default ActionButton;
