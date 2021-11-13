import { FunctionComponent } from "react";
import ParentProps from "ui/common/props/ParentProps";

interface LayoutProps extends ParentProps {}

const Layout: FunctionComponent<LayoutProps> = (props: LayoutProps) => (
  <>{props.children}</>
);

export default Layout;
