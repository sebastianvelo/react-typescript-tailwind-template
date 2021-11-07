import Row from "common/ui/widget/row/Row";
import Section from "common/ui/widget/section/Section";
import Tabs from "common/ui/widget/tabs/Tabs";
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
