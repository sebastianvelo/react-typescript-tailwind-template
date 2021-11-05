import Row from "common/ui/widget/row/Row";
import { FunctionComponent } from "react";
import ActionSection from "./actions/ActionSection";
import BadgeSection from "./badges/BadgeSection";
import BreadcrumbSection from "./breadcrumb/BreadcrumSection";

interface DemoProps {}

const Demo: FunctionComponent<DemoProps> = () => (
  <div
    className={`bg-gray-300 min-h-screen w-screen divide-y-2 divide-primary`}
  >
    <Row className={`divide-x-2 divide-primary`} responsive>
      <BadgeSection />
      <ActionSection />
    </Row>
    <Row className={`divide-x-2 divide-primary`} responsive>
      <BreadcrumbSection />
    </Row>
  </div>
);

export default Demo;
