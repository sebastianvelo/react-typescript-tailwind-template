import TailwindStyle from "common/tailwind/TailwindStyle";
import TextContentProps from "common/ui/common/props/TextContentProps";
import Color from "common/ui/types/color/Color";
import Size from "common/ui/types/size/Size";
import { FunctionComponent } from "react";

const getClassName = (props: TitleProps) => TailwindStyle.builder()
    .add(`font-bold`)
    .addIf(`text-md`, !props.size || props.size === 'm')
    .addIf(`text-xs`, props.size === 'xs')
    .addIf(`text-sm`, props.size === 's')
    .addIf(`text-lg`, props.size === 'l')
    .addIf(`text-xl`, props.size === 'xl')
    .addIf(`text-2xl`, props.size === '2xl')
    .addIf(`text-3xl`, props.size === '3xl')
    .addIf(`text-dark`, !props.color || props.color === 'dark')
    .addIf(`text-secondary`, props.color === 'secondary')
    .addIf(`text-warning`, props.color === 'warning')
    .addIf(`text-danger`, props.color === 'danger')
    .addIf(`text-success`, props.color === 'success')
    .addIf(`text-primary`, props.color === 'primary')
    .addIf(`text-light`, props.color === 'light')
    .get();

export interface TitleProps extends TextContentProps{
    color?: Color;
    size?: Size;
}

const Title: FunctionComponent<TitleProps> = (props: TitleProps) => {
    return (
        <h1 className={getClassName(props)}>{props.content}</h1>
    );
}

export default Title;