import Message from "ui/components/message/Message";
import Row from "ui/layout/row/Row";
import { ComponentSectionProps } from "demo/common/ComponentSection";

const messagesSection: ComponentSectionProps = {
  title: "Message",
  articles: [
    {
      title: { size: "2xl", children: "Loud" },
      children: (
        <Row className="md:space-y-2">
          <Message color="info" children={`Lorem ipsum dolor sit amet consectetuer.`} />
          <Message color="success" children={`Lorem ipsum dolor sit amet consectetuer.`} />
          <Message color="warning" children={`Lorem ipsum dolor sit amet consectetuer.`} />
          <Message color="danger" children={`Lorem ipsum dolor sit amet consectetuer.`} />
        </Row>
      )
    },
    {
      title: { size: "2xl", children: "Quiet" },
      children: (
        <Row className="md:space-y-2">
          <Message color="info" quiet children={`Lorem ipsum dolor sit amet consectetuer.`} />
          <Message color="success" quiet children={`Lorem ipsum dolor sit amet consectetuer.`} />
          <Message color="warning" quiet children={`Lorem ipsum dolor sit amet consectetuer.`} />
          <Message color="danger" quiet children={`Lorem ipsum dolor sit amet consectetuer.`} />
        </Row>
      )
    }
  ]
};

export default messagesSection;
