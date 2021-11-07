import TailwindStyle from "common/tailwind/TailwindStyle";
import Notification from "common/ui/components/badge/notification/Notification";
import Title from "common/ui/components/title/Title";
import { bgColorStyle, borderColorStyle } from "common/ui/style/CommonStyles";
import FeedbackType from "common/ui/types/feedback/FeedbackType";
import { FunctionComponent } from "react";

const messageStyle = (props: MessageProps) =>
  TailwindStyle.builder()
    .add(`flex space-x-2 px-2 py-4 w-full`)
    .addIf(bgColorStyle(props), !props.quiet)
    .addIf(bgColorStyle({ color: "light" }), props.quiet)
    .addIf(`border-l-4 ${borderColorStyle(props)}`, props.quiet)
    .get();

interface MessageProps {
  color?: FeedbackType;
  quiet?: boolean;
}

const Message: FunctionComponent<MessageProps> = (props: MessageProps) => (
  <div className={messageStyle(props)}>
    <Notification type={props.color ?? "info"} quiet={!props.quiet} />
    <Title content={`Lorem ipsum dolor sit amet consectetuer.`} />
  </div>
);

export default Message;
