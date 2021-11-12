import Message from "ui/components/message/Message";
import Row from "ui/layout/row/Row";
import { ComponentSectionProps } from "demo/common/ComponentSection";

const messagesSection: ComponentSectionProps = {
  title: "Message",
  articles: [
    {
      title: { size: "2xl", content: "Loud" },
      children: (
        <Row className="md:space-y-2">
          <Message color="info" content={`Lorem ipsum dolor sit amet consectetuer.`} />
          <Message color="success" content={`Lorem ipsum dolor sit amet consectetuer.`} />
          <Message color="warning" content={`Lorem ipsum dolor sit amet consectetuer.`} />
          <Message color="danger" content={`Lorem ipsum dolor sit amet consectetuer.`} />
        </Row>
      )
    },
    {
      title: { size: "2xl", content: "Quiet" },
      children: (
        <Row className="md:space-y-2">
          <Message color="info" quiet content={`Lorem ipsum dolor sit amet consectetuer.`} />
          <Message color="success" quiet content={`Lorem ipsum dolor sit amet consectetuer.`} />
          <Message color="warning" quiet content={`Lorem ipsum dolor sit amet consectetuer.`} />
          <Message color="danger" quiet content={`Lorem ipsum dolor sit amet consectetuer.`} />
        </Row>
      )
    }
  ]
};

export default messagesSection;
