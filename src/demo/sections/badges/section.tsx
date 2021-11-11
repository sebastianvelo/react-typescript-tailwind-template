import Dot from "common/ui/atomic/badge/dot/Dot";
import Pill from "common/ui/atomic/badge/pill/Pill";
import Row from "common/ui/layout/row/Row";
import Notification from "common/ui/atomic/badge/notification/Notification";
import { ComponentSectionProps } from "demo/common/ComponentSection";
import Size from "common/ui/lib/types/size/Size";

const badgesSection: ComponentSectionProps = {
  title: "Badges",
  articles: [
    {
      title: { content: "Pill" },
      children: (
        <Row className="md:space-x-2">
          <Pill content={`primary`} color="primary" />
          <Pill content={`secondary`} color="secondary" />
          <Pill content={`danger`} color="danger" />
          <Pill content={`success`} color="success" />
          <Pill content={`info`} color="info" />
          <Pill content={`warning`} color="warning" />
        </Row>
      )
    },
    {
      title: { content: "Notification" },
      children: (
        <>
          {(["xl", "2xl", "3xl"] as Size[]).map((size: Size) => (
            <Row className="md:space-x-2">
              <Notification type="success" size={size} />
              <Notification type="info" size={size} />
              <Notification type="danger" size={size} />
              <Notification type="warning" size={size} />
            </Row>
          ))}
        </>
      )
    },
    {
      title: { content: "Dot" },
      children: (
        <Row className="md:space-x-2">
          <Dot color="primary" />
          <Dot color="secondary" />
          <Dot color="danger" />
          <Dot color="success" />
          <Dot color="info" />
          <Dot color="warning" />
        </Row>
      )
    }
  ]
};

export default badgesSection;
