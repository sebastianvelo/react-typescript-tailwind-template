import { FunctionComponent } from "react";
import ParentProps from "ui/common/props/ParentProps";

interface ViewProps extends ParentProps {}

const View: FunctionComponent<ViewProps> = (props: ViewProps) => <>{props.children}</>;

export default View;
