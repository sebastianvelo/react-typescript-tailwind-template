import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { FunctionComponent } from "react";

const brandStyle = TailwindStyle.builder()
  .add("text-4xl font-extrabold tracking-tighter rounded-xl")
  .add("px-2 mx-2")
  .add("border-t-4 border-l-4 border-secondary-light")
  .add("hover:tracking-widest transition-letter-spacing duration-200 ease-in")
  .add(
    "bg-clip-text text-transparent bg-gradient-to-bl from-secondary-light to-secondary-dark"
  )
  .get();
export interface BrandProps {
  header?: string;
}

const Brand: FunctionComponent<BrandProps> = (props: BrandProps) => (
  <header className={brandStyle}>{props.header}</header>
);

export default Brand;
