import TailwindStyle from "common/tailwind/TailwindStyle";
import { bgColorStyle, divideColorStyle } from "common/ui/style/CommonStyles";
import Row from "common/ui/widget/row/Row";
import { FunctionComponent } from "react";
import ActionSection from "./actions/ActionSection";
import BadgeSection from "./badges/BadgeSection";
import BreadcrumbSection from "./breadcrumb/BreadcrumbSection";
import CheckboxSection from "./checkbox/CheckboxSection";
import MessageSection from "./messages/MessageSection";
import StorySection from "./stories/StorySection";
import TabsSection from "./tabs/TabsSection";

const demoStyle = TailwindStyle.builder()
  .add(`min-h-screen w-screen`)
  .add(divideColorStyle({}))
  .add(bgColorStyle({}))
  .get();

interface DemoProps {}

const Demo: FunctionComponent<DemoProps> = () => (
  <div className={demoStyle}>
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
    <Row className={`divide-x-2 divide-dark dark:divide-light`} responsive>
      <MessageSection />
    </Row>
  </div>
);

export default Demo;
