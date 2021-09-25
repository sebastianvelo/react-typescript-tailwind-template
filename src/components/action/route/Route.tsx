import { FunctionComponent } from "react";
import { Route as ReactRoute } from "react-router-dom";

export interface RouteProps {
  path?: string;
  label?: string;
  className?: string;
  exact?: boolean;
}

const Route: FunctionComponent<RouteProps> = (props: RouteProps) => {
  return <ReactRoute exact={props.exact} path={props.path}></ReactRoute>;
};

export default Route;
