import TailwindStyle from "common/tailwind/TailwindStyle";
import StyleableProps from "common/ui/common/props/StyleableProps";
import TextContentProps from "common/ui/common/props/TextContentProps";
import Color from "common/ui/types/color/Color";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const getClassName = (props: ActionLinkProps) => TailwindStyle.builder()
    .add(`cursor-pointer`)
    .add(`transition duration-300 ease-in-out`)
    .addIf(`text-dark hover:text-dark-light`, !props.color || props.color === 'dark')
    .addIf(`text-secondary hover:text-secondary-dark`, props.color === 'secondary')
    .addIf(`text-warning hover:text-warning-dark`, props.color === 'warning')
    .addIf(`text-danger hover:text-danger-dark`, props.color === 'danger')
    .addIf(`text-success hover:text-success-dark`, props.color === 'success')
    .addIf(`text-primary hover:text-primary-dark`, props.color === 'primary')
    .addIf(`text-light hover:text-light-dark`, props.color === 'light')
    .addIf(`text-info hover:text-info-dark`, props.color === 'info')
    .get();

export interface ActionLinkProps extends StyleableProps, TextContentProps {
    color?: Color;
    route?: string;
}

const ActionLink: FunctionComponent<ActionLinkProps> = (props: ActionLinkProps) => {
    return (
        <Link to={props.route ?? ''} className={getClassName(props)}>{props.content}</Link>
    );
}

export default ActionLink;