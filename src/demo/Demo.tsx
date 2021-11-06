import Row from "common/ui/widget/row/Row";
import { FunctionComponent } from "react";
import ActionSection from "./actions/ActionSection";
import BadgeSection from "./badges/BadgeSection";
import BreadcrumbSection from "./breadcrumb/BreadcrumSection";
import CheckboxSection from "./checkbox/CheckboxSection";
import TabsSection from "./tabs/TabsSection";

interface DemoProps {}

const Demo: FunctionComponent<DemoProps> = () => (
  <div className={`bg-gray-100 min-h-screen w-screen divide-y-2 divide-dark`}>
    <Row className={`divide-x-2 divide-dark`} responsive>
      <BadgeSection />
      <ActionSection />
    </Row>
    <Row className={`divide-x-2 divide-dark`} responsive>
      <BreadcrumbSection />
      <TabsSection />
    </Row>
    <Row className={`divide-x-2 divide-dark`} responsive>
      <CheckboxSection />
    </Row>
  </div>
);

export default Demo;
