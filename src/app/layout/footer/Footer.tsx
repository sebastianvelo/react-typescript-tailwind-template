import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { FunctionComponent } from "react";
import Author, { AuthorProps } from "./Author";

const footerStyle = TailwindStyle.builder()
  .add("relative h-52 w-fullmx-auto text-right")
  .add("dark:bg-dark dark:text-primary-light")
  .add("bg-light text-primary")
  .get();

export interface FooterProps {
  author: AuthorProps;
}

const Footer: FunctionComponent<FooterProps> = (props: FooterProps) => (
  <footer className={footerStyle}>
    <Author {...props.author} />
  </footer>
);

export default Footer;
