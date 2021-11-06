import Dot from "common/ui/components/badge/dot/Dot";
import Pill from "common/ui/components/badge/pill/Pill";
import Row from "common/ui/widget/row/Row";
import Section from "common/ui/widget/section/Section";
import Notification from "common/ui/components/badge/notification/Notification";
import { FunctionComponent } from "react";

const BadgeSection: FunctionComponent = () => (
  <Section
    className={`w-full`}
    title={{
      content: "Badge",
      size: "3xl",
      className: "bg-dark p-2",
      color: "primary"
    }}
    articles={[
      {
        title: { size: "2xl", content: "Pill" },
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
        title: { size: "2xl", content: "Notification" },
        children: (
          <Row className="md:space-x-2">
            <Notification type="success" size="xl" />
            <Notification type="info" size="xl" />
            <Notification type="danger" size="xl" />
            <Notification type="warning" size="xl" />
          </Row>
        )
      },
      {
        title: { size: "2xl", content: "Dot" },
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
    ]}
  />
);

export default BadgeSection;
