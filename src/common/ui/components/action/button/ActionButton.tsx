import TailwindStyle from "common/tailwind/TailwindStyle";
import StyleableProps from "common/ui/common/props/StyleableProps";
import TextContentProps from "common/ui/common/props/TextContentProps";
import Color from "common/ui/types/color/Color";
import { FunctionComponent } from "react";

const getClassName = (props: ActionButtonProps) => TailwindStyle.builder()
    .add(`transition duration-300 ease-in-out`)
    .add(`bg-primary rounded-md text-center px-3 font-bold`)
    .addIf(`bg-primary text-white hover:bg-primary-dark `, !props.color || props.color === 'primary')
    .addIf(`bg-secondary text-white hover:bg-secondary-dark `, props.color === 'secondary')
    .addIf(`bg-warning-light hover:bg-warning`, props.color === 'warning')
    .addIf(`bg-danger text-white hover:bg-danger-dark`, props.color === 'danger')
    .addIf(`bg-success text-white hover:bg-success-dark`, props.color === 'success')
    .addIf(`bg-info text-white hover:bg-info-dark`, props.color === 'info')
    .addIf(`bg-dark hover:bg-dark-light`, props.color === 'dark')
    .addIf(`bg-light hover:bg-light-dark`, props.color === 'light')
    .get();

export interface ActionButtonProps extends TextContentProps, StyleableProps {
    color?: Color;
    onClick?: Function;
}
 
const ActionButton: FunctionComponent<ActionButtonProps> = (props: ActionButtonProps) => {
    return ( 
        <button className={getClassName(props)}>
            {props.content}
        </button>
     );
}
 
export default ActionButton;