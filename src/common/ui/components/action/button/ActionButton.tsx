import TailwindStyle from "common/tailwind/TailwindStyle";
import ColorProps from "common/ui/common/props/ColorProps";
import StyleableProps from "common/ui/common/props/StyleableProps";
import TextContentProps from "common/ui/common/props/TextContentProps";
import { bgColorStyle, bgColorHoverableStyle } from "common/ui/style/CommonStyles";
import { FunctionComponent } from "react";

const getClassName = (props: ActionButtonProps) => TailwindStyle.builder()
    .add(`rounded-md text-center px-3 font-bold`)
    .add(bgColorStyle(props))
    .add(bgColorHoverableStyle(props))
    .get();

export interface ActionButtonProps extends TextContentProps, StyleableProps, ColorProps {
    onClick?: Function;
}
 
const ActionButton: FunctionComponent<ActionButtonProps> = (props: ActionButtonProps) => ( 
        <button className={getClassName(props)}>
            {props.content}
        </button>
     )
 
export default ActionButton;