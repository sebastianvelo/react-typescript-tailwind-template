import Tabs from "common/ui/components/tabs/Tabs";
import Row from "common/ui/layout/row/Row";
import { ComponentSectionProps } from "demo/common/ComponentSection";
import { tabsProps } from "./mock";

const tabsSection: ComponentSectionProps = {
  title: "Tabs",
  articles: [
    {
      children: (
        <Row className="md:space-x-2">
          <Tabs {...tabsProps} />
        </Row>
      )
    }
  ]
};

export default tabsSection;
