import Text from "ui/atomic/text/Text";
import Title from "ui/atomic/title/Title";
import { borderColorStyle } from "ui/common/style/CommonStyles";
import Actions from "ui/lists/actions/Actions";
import { FunctionComponent } from "react";
import { ActionProps } from "../action/Action";

export interface CardProps {
  header?: string;
  body?: {
    title?: string;
    content?: string;
  };
  footer?: {
    actions?: ActionProps[];
  };
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => (
  <div className={`space-y-4 relative`}>
    <header>
      <Title content={props.header} size="3xl" />
    </header>
    <div className={`space-y-4 overflow-y-scroll h-52`}>
      <Title content={props.body?.title} size="2xl" />
      <Text content={props.body?.content} />
    </div>
    <footer className={`border-t ${borderColorStyle({})} w-full p-2 flex`}>
      <Actions {...props.footer} />
    </footer>
  </div>
);

export default Card;
