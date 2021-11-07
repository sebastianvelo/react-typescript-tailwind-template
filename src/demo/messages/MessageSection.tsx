import Message from "common/ui/widget/message/Message";
import Row from "common/ui/widget/row/Row";
import Section from "common/ui/widget/section/Section";
import { FunctionComponent } from "react";
import { sectionProps } from "./mock/Mock";

const MessageSection: FunctionComponent = () => (
  <Section
    {...sectionProps}
    articles={[
      {
        title: { size: "2xl", content: "Loud" },
        children: (
          <Row className="md:space-y-2">
            <Message color="info" />
            <Message color="success" />
            <Message color="warning" />
            <Message color="danger" />
          </Row>
        )
      },
      {
        title: { size: "2xl", content: "Quiet" },
        children: (
          <Row className="md:space-y-2">
            <Message color="info" quiet />
            <Message color="success" quiet />
            <Message color="warning" quiet />
            <Message color="danger" quiet />
          </Row>
        )
      }
    ]}
  />
);

export default MessageSection;
