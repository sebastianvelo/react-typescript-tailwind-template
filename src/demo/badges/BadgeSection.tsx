import Dot from "common/ui/atomic/badge/dot/Dot";
import Pill from "common/ui/atomic/badge/pill/Pill";
import Row from "common/ui/components/row/Row";
import Section from "common/ui/layout/section/Section";
import Notification from "common/ui/atomic/badge/notification/Notification";
import { FunctionComponent } from "react";
import { sectionProps } from "./mock/Mock";

const BadgeSection: FunctionComponent = () => (
  <Section
    {...sectionProps}
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
