import TailwindStyle from "common/tailwind/TailwindStyle";
import StyleableProps from "common/ui/lib/props/StyleableProps";
import Title, { TitleProps } from "common/ui/atomic/title/Title";
import { FunctionComponent } from "react";
import Article, { ArticleProps } from "../article/Article";

const sectionStyle = (props: SectionProps) =>
  TailwindStyle.builder()
    .add(props.className)
    .add(`space-y-2`)
    .get();

interface SectionProps extends StyleableProps {
  articles?: ArticleProps[];
  title?: TitleProps;
}

const Section: FunctionComponent<SectionProps> = (props: SectionProps) => (
  <section className={sectionStyle(props)}>
    <Title {...props.title} />
    <div className={`px-2 space-y-4`}>
      {props.articles?.map((article) => (
        <Article {...article} />
      ))}
    </div>
  </section>
);

export default Section;
