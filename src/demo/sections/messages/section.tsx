import Message from "common/ui/components/message/Message";
import Row from "common/ui/layout/row/Row";
import { ComponentSectionProps } from "demo/common/ComponentSection";

const messagesSection: ComponentSectionProps = {
  title: "Message",
  articles: [
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
  ]
};

export default messagesSection;
