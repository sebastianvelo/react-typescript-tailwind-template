import TailwindStyle from "common/tailwind/TailwindStyle";
import ColorProps from "../common/props/ColorProps";
import SizeProps from "../common/props/SizeProps";

export const transitionStyle = () =>
  TailwindStyle.builder()
    .add(`transition-all duration-300 ease-in-out`)
    .get();

export const hoverableStyle = () =>
  TailwindStyle.builder()
    .add(`cursor-pointer`)
    .add(transitionStyle())
    .get();

export const textColorStyle = (props: ColorProps) =>
  TailwindStyle.builder()
    .addIf(`text-dark`, !props.color || props.color === "dark")
    .addIf(`text-secondary`, props.color === "secondary")
    .addIf(`text-warning`, props.color === "warning")
    .addIf(`text-danger`, props.color === "danger")
    .addIf(`text-success`, props.color === "success")
    .addIf(`text-primary`, props.color === "primary")
    .addIf(`text-light`, props.color === "light")
    .addIf(`text-info`, props.color === "info")
    .get();

export const textColorHoverableStyle = (props: ColorProps) =>
  TailwindStyle.builder()
    .add(hoverableStyle())
    .addIf(`hover:text-dark-light`, !props.color || props.color === "dark")
    .addIf(`hover:text-secondary-dark`, props.color === "secondary")
    .addIf(`hover:text-warning-dark`, props.color === "warning")
    .addIf(`hover:text-danger-dark`, props.color === "danger")
    .addIf(`hover:text-success-dark`, props.color === "success")
    .addIf(`hover:text-primary-dark`, props.color === "primary")
    .addIf(`hover:text-light-dark`, props.color === "light")
    .addIf(`hover:text-info-dark`, props.color === "info")
    .get();

export const bgColorStyle = (props: ColorProps) =>
  TailwindStyle.builder()
    .addIf(`bg-primary text-white`, !props.color || props.color === "primary")
    .addIf(`bg-secondary text-white`, props.color === "secondary")
    .addIf(`bg-warning-light`, props.color === "warning")
    .addIf(`bg-danger text-white`, props.color === "danger")
    .addIf(`bg-success text-white`, props.color === "success")
    .addIf(`bg-info text-white`, props.color === "info")
    .addIf(`bg-dark`, props.color === "dark")
    .addIf(`bg-light`, props.color === "light")
    .get();

export const bgColorHoverableStyle = (props: ColorProps) =>
  TailwindStyle.builder()
    .add(hoverableStyle())
    .addIf(`hover:bg-primary-dark `, !props.color || props.color === "primary")
    .addIf(`hover:bg-secondary-dark `, props.color === "secondary")
    .addIf(`hover:bg-warning`, props.color === "warning")
    .addIf(`hover:bg-danger-dark`, props.color === "danger")
    .addIf(`hover:bg-success-dark`, props.color === "success")
    .addIf(`hover:bg-info-dark`, props.color === "info")
    .addIf(`hover:bg-dark-light`, props.color === "dark")
    .addIf(`hover:bg-light-dark`, props.color === "light")
    .get();

export const textSizeStyle = (props: SizeProps) =>
  TailwindStyle.builder()
    .addIf(`text-md`, !props.size || props.size === "m")
    .addIf(`text-xs`, props.size === "xs")
    .addIf(`text-sm`, props.size === "s")
    .addIf(`text-lg`, props.size === "l")
    .addIf(`text-xl`, props.size === "xl")
    .addIf(`text-2xl`, props.size === "2xl")
    .addIf(`text-3xl`, props.size === "3xl")
    .get();
