import { FunctionComponent } from "react";
import ComponentColor from "style/tailwind/ComponentColor";
import Anchor, { AnchorProps } from "./anchor/Anchor";
import Button, { ButtonProps } from "./button/Button";
import Link, { LinkProps } from "./route/Route";

const EXTERNAL_PATH = "http";
const ACTION_CLASS_NAME = `px-4 py-2 rounded-md`;

export interface ActionProps extends AnchorProps, LinkProps, ButtonProps {
  color?: ComponentColor;
}

const Action: FunctionComponent<ActionProps> = (props: ActionProps) => {
  const className = `${props.color ?? ''} ${props.className ?? ''} ${ACTION_CLASS_NAME}`.trim();
  return (
    <>
      {!props.path ? (
        <Button {...props} className={className} />
      ) : props.path.startsWith(EXTERNAL_PATH) ? (
        <Anchor {...props} className={className} />
      ) : (
        <Link {...props} className={className} />
      )}
    </>
  );
};

export default Action;
