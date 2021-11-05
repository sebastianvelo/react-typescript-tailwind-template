import TailwindStyle from "common/tailwind/TailwindStyle";
import StyleableProps from "common/ui/common/props/StyleableProps";
import Title, { TitleProps } from "common/ui/components/title/Title";
import { FunctionComponent } from "react";
import Article, { ArticleProps } from "../article/Article";

const getClassName = (props: SectionProps) =>
  TailwindStyle.builder().add(props.className).add(`px-4 py-2 space-y-2`).get();

interface SectionProps extends StyleableProps {
  articles?: ArticleProps[];
  title?: TitleProps;
}

const Section: FunctionComponent<SectionProps> = (props: SectionProps) => (
  <section className={getClassName(props)}>
    <Title {...props.title} />
    {props.articles?.map((article) => (
      <Article {...article} />
    ))}
  </section>
);

export default Section;
