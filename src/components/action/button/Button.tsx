import { FunctionComponent, MouseEventHandler } from "react";

export interface ButtonProps {
  label?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
