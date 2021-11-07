import Row from "common/ui/components/row/Row";
import Section from "common/ui/layout/section/Section";
import Tabs from "common/ui/components/tabs/Tabs";
import { FunctionComponent } from "react";
import { tabsProps } from "./mock/Mock";

const TabsSection: FunctionComponent = () => (
  <Section
    className={`w-full`}
    title={{
      size: "3xl",
      className: "bg-dark p-2",
      color: "primary",
      content: "Tabs"
    }}
    articles={[
      {
        children: (
          <Row className="md:space-x-2">
            <Tabs {...tabsProps} />
          </Row>
        )
      }
    ]}
  />
);

export default TabsSection;
