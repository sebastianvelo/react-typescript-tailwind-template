import TailwindStyle from "common/tailwind/TailwindStyle";
import Color from "common/ui/types/color/Color";
import { FunctionComponent } from "react";

const getClassName = (props: DotProps) => TailwindStyle.builder()
    .add(`h-3 w-3 rounded-full`)
    .addIf(`bg-primary`, !props.color || props.color === 'primary')
    .addIf(`bg-secondary`, props.color === 'secondary')
    .addIf(`bg-warning`, props.color === 'warning')
    .addIf(`bg-danger`, props.color === 'danger')
    .addIf(`bg-success`, props.color === 'success')
    .addIf(`bg-info`, props.color === 'info')
    .addIf(`bg-dark`, props.color === 'dark')
    .addIf(`bg-light`, props.color === 'light')
    .get();

interface DotProps {
    color?: Color;
}

const Dot: FunctionComponent<DotProps> = (props: DotProps) => {
    return (
        <div className={getClassName(props)}></div>
    );
}

export default Dot;