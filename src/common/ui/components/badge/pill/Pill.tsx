import TailwindStyle from "common/tailwind/TailwindStyle";
import TextContentProps from "common/ui/common/props/TextContentProps";
import Color from "common/ui/types/color/Color";
import { FunctionComponent } from "react";

const getClassName = (props: PillProps) => TailwindStyle.builder()
    .add(`bg-primary rounded-xl text-center px-3 font-bold`)
    .addIf(`bg-primary text-white`, !props.color || props.color === 'primary')
    .addIf(`bg-secondary text-white`, props.color === 'secondary')
    .addIf(`bg-warning-light`, props.color === 'warning')
    .addIf(`bg-danger text-white`, props.color === 'danger')
    .addIf(`bg-success text-white`, props.color === 'success')
    .addIf(`bg-info text-white`, props.color === 'info')
    .addIf(`bg-dark`, props.color === 'dark')
    .addIf(`bg-light `, props.color === 'light')
    .get();

interface PillProps extends TextContentProps {
    color?: Color;
}

const Pill: FunctionComponent<PillProps> = (props: PillProps) => {
    return (
        <div className={getClassName(props)}>
            {props.content?.toUpperCase()}
        </div>
    );
}

export default Pill;