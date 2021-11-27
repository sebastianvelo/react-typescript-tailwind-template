import Dot from "ui/atomic/badge/dot/Dot";
import Pill from "ui/atomic/badge/pill/Pill";
import Row from "ui/layout/row/Row";
import Notification from "ui/atomic/badge/notification/Notification";
import { ComponentSectionProps } from "demo/common/ComponentSection";
import Size from "ui/common/types/size/Size";

const badgesSection: ComponentSectionProps = {
  title: "Badges",
  articles: [
    {
      title: { children: "Pill" },
      children: (
        <Row className="md:space-x-2">
          <Pill children={`primary`} color="primary" />
          <Pill children={`secondary`} color="secondary" />
          <Pill children={`danger`} color="danger" />
          <Pill children={`success`} color="success" />
          <Pill children={`info`} color="info" />
          <Pill children={`warning`} color="warning" />
        </Row>
      )
    },
    {
      title: { children: "Notification" },
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
      title: { children: "Dot" },
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
