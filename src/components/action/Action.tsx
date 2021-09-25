import { FunctionComponent } from "react";
import ComponentColor from "style/tailwind/ComponentColor";
import { AnchorProps } from "./anchor/Anchor";
import Button, { ButtonProps } from "./button/Button";
import Route, { RouteProps } from "./route/Route";

const EXTERNAL_PATH = "http";

export interface ActionProps extends AnchorProps, RouteProps, ButtonProps {
  color?: ComponentColor;
}

const Action: FunctionComponent<ActionProps> = (props: ActionProps) => {
  const className = `${props.color ?? ''} ${props.className ?? ''} px-4 py-2 rounded-md`.trim();
  return (
    <>
      {!props.path ? (
        <Button {...props} className={className} />
      ) : props.path.startsWith(EXTERNAL_PATH) ? (
        <Action {...props} className={className} />
      ) : (
        <Route {...props} className={className} />
      )}
    </>
  );
};

export default Action;
