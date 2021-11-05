import TailwindStyle from "common/tailwind/TailwindStyle";
import ParentProps from "common/ui/common/props/ParentProps";
import StyleableProps from "common/ui/common/props/StyleableProps";
import Title, { TitleProps } from "common/ui/components/title/Title";
import { FunctionComponent } from "react";

const getClassName = (props: ArticleProps) => TailwindStyle.builder()
    .add(props.className)
    .add(`py-2 space-y-2`)
    .get();
    
export interface ArticleProps extends ParentProps, StyleableProps {
    title?: TitleProps
}

const Article: FunctionComponent<ArticleProps> = (props: ArticleProps) => {
    return (
        <article className={getClassName(props)}>
            <Title {...props.title} />
            {props.children}
        </article>
    );
}

export default Article;