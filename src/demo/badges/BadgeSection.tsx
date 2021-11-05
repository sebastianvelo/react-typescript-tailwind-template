import Dot from "common/ui/components/badge/dot/Dot";
import Pill from "common/ui/components/badge/pill/Pill";
import Row from "common/ui/widget/row/Row";
import Section from "common/ui/widget/section/Section";
import Notification from "common/ui/components/badge/notification/Notification";
import { FunctionComponent } from "react";

const BadgeSection: FunctionComponent = () => ( 
        <Section
        className={`divide-secondary w-full`}
        title={{ size: "3xl", content: "Badge" }}
        articles={[
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
            title: { size: "2xl", content: "Pill" },
            children: (
              <Row className="md:space-x-2">
                <Pill content={`hello`} color="primary" />
                <Pill content={`hello`} color="secondary" />
                <Pill content={`hello`} color="danger" />
                <Pill content={`hello`} color="success" />
                <Pill content={`hello`} color="info" />
                <Pill content={`hello`} color="warning" />
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
     )
 
export default BadgeSection;