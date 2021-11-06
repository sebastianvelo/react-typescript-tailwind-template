import { bgColorStyle } from "common/ui/style/CommonStyles";
import Row from "common/ui/widget/row/Row";
import { FunctionComponent } from "react";
import ActionSection from "./actions/ActionSection";
import BadgeSection from "./badges/BadgeSection";
import BreadcrumbSection from "./breadcrumb/BreadcrumbSection";
import CheckboxSection from "./checkbox/CheckboxSection";
import StorySection from "./stories/StorySection";
import TabsSection from "./tabs/TabsSection";

interface DemoProps {}

const Demo: FunctionComponent<DemoProps> = () => (
  <div
    className={`min-h-screen w-screen divide-y-2 divide-dark dark:divide-light ${bgColorStyle({})}`}
  >
    <Row className={`divide-x-2 divide-dark dark:divide-light`} responsive>
      <BadgeSection />
      <ActionSection />
    </Row>
    <Row className={`divide-x-2 divide-dark dark:divide-light`} responsive>
      <BreadcrumbSection />
      <TabsSection />
    </Row>
    <Row className={`divide-x-2 divide-dark dark:divide-light`} responsive>
      <CheckboxSection />
      <StorySection />
    </Row>
  </div>
);

export default Demo;
