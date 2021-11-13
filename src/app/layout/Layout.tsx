import { FunctionComponent } from "react";
import Footer, { FooterProps } from "./footer/Footer";
import Main, { MainProps } from "./main/Main";
import Navigation, { NavigationProps } from "./navigation/Navigation";

export interface LayoutProps {
  navigation?: NavigationProps;
  main?: MainProps;
  footer?: FooterProps;
}

const Layout: FunctionComponent<LayoutProps> = (props: LayoutProps) => (
  <>
    <Navigation {...props.navigation} />
    <Main {...props.main} />
    <Footer {...props.footer} />
  </>
);

export default Layout;
