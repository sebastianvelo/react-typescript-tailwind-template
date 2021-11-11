import TailwindStyle from "common/tailwind/TailwindStyle";
import ColorProps from "common/ui/lib/props/ColorProps";
import ParentProps from "common/ui/lib/props/ParentProps";
import SizeProps from "common/ui/lib/props/SizeProps";
import StyleableProps from "common/ui/lib/props/StyleableProps";
import TextContentProps from "common/ui/lib/props/TextContentProps";
import {
  bgColorStyle,
  bgColorHoverableStyle,
  borderColorStyle,
  bgColorQuietHoverableStyle,
  transitionStyle,
  textColorStyle,
  buttonSizeStyle,
} from "common/ui/lib/style/CommonStyles";
import { FunctionComponent } from "react";

const buttonStyle = (props: ActionButtonProps) =>
  TailwindStyle.builder()
    .add(props.className)
    .add(`rounded-md text-center border`)
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
