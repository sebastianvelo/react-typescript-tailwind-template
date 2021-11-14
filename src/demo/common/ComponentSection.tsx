import { ArticleProps } from "ui/layout/article/Article";
import Section from "ui/layout/section/Section";
import { FunctionComponent } from "react";

export interface ComponentSectionProps {
  title: string;
  articles?: ArticleProps[];
}

const ComponentSection: FunctionComponent<ComponentSectionProps> = (
  props: ComponentSectionProps
) => (
  <Section
    className={`w-full`}
    title={{ children: props.title, size: "3xl",  className: 'bg-primary p-2' }}
    articles={props.articles?.map((article) => ({
      ...article,
      title: { ...article.title, size: "2xl" }
    }))}
  />
);

export default ComponentSection;
