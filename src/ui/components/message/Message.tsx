import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import Notification from "ui/atomic/badge/notification/Notification";
import Title from "ui/atomic/title/Title";
import TextContentProps from "ui/common/props/TextContentProps";
import {
  bgColorStyle,
  borderColorStyle
} from "ui/common/style/CommonStyles";
import FeedbackType from "ui/common/types/feedback/FeedbackType";
import { FunctionComponent } from "react";

const messageStyle = (props: MessageProps) =>
  TailwindStyle.builder()
    .add("flex space-x-2 px-2 py-4 w-full rounded-sm  shadow-xl")
    .addIf(bgColorStyle(props), !props.quiet)
    .addIf(bgColorStyle({ color: "light" }), props.quiet)
    .addIf(`border-l-4 ${borderColorStyle(props)}`, props.quiet)
    .get();

export interface MessageProps extends TextContentProps {
  color?: FeedbackType;
  quiet?: boolean;
}

const Message: FunctionComponent<MessageProps> = (props: MessageProps) => (
  <div className={messageStyle(props)}>
    <Notification type={props.color ?? "info"} quiet={!props.quiet} />
    <Title content={props.content} />
  </div>
);

export default Message;
