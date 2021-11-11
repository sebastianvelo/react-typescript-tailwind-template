import { ArticleProps } from "common/ui/layout/article/Article";
import Section from "common/ui/layout/section/Section";
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
    title={{ content: props.title, size: "3xl",  className: 'bg-primary p-2' }}
    articles={props.articles?.map((article) => ({
      ...article,
      title: { ...article.title, size: "2xl" }
    }))}
  />
);

export default ComponentSection;
