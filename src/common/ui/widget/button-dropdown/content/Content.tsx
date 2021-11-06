import TailwindStyle from "common/tailwind/TailwindStyle";
import Action, { ActionProps } from "common/ui/components/action/Action";
import {
  bgColorHoverableStyle,
  bgColorStyle
} from "common/ui/style/CommonStyles";
import { FunctionComponent } from "react";

const contentStyle = TailwindStyle.builder()
  .add(`flex flex-col w-28 shadow-xl`)
  .add(`border border-dark-light rounded-md`)
  .add(`absolute left-2`)
  .add(bgColorStyle({}))
  .get();

const itemStyle = TailwindStyle.builder()
  .add(`p-2 w-full cursor-pointer rounded-md`)
  .add(bgColorHoverableStyle({}))
  .get();

export interface ContentProps {
  actions?: ActionProps[];
}

const Content: FunctionComponent<ContentProps> = (props: ContentProps) => (
  <div className={contentStyle}>
    {props.actions?.map((action) => (
      <div className={itemStyle}>
        <Action {...action} />
      </div>
    ))}
  </div>
);

export default Content;
