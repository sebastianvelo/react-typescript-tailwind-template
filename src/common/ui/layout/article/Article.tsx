import TailwindStyle from "common/tailwind/TailwindStyle";
import ParentProps from "common/ui/lib/props/ParentProps";
import StyleableProps from "common/ui/lib/props/StyleableProps";
import Title, { TitleProps } from "common/ui/atomic/title/Title";
import { FunctionComponent } from "react";

const articleStyle = (props: ArticleProps) =>
  TailwindStyle.builder().add(props.className).add(`py-2 space-y-2`).get();

export interface ArticleProps extends ParentProps, StyleableProps {
  title?: TitleProps;
}

const Article: FunctionComponent<ArticleProps> = (props: ArticleProps) => (
  <article className={articleStyle(props)}>
    <Title {...props.title} />
    {props.children}
  </article>
);

export default Article;
