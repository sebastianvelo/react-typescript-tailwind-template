import TailwindStyle from "common/tailwind/TailwindStyle";
import Row from "common/ui/components/row/Row";
import {
  divideColorStyle,
  bgColorStyle
} from "common/ui/lib/style/CommonStyles";
import { FunctionComponent } from "react";
import ActionSection from "./actions/ActionSection";
import BadgeSection from "./badges/BadgeSection";
import BreadcrumbSection from "./breadcrumb/BreadcrumbSection";
import CheckboxSection from "./checkbox/CheckboxSection";
import MessageSection from "./messages/MessageSection";
import StorySection from "./stories/StorySection";
import TabsSection from "./tabs/TabsSection";

const demoStyle = TailwindStyle.builder()
  .add(`min-h-screen w-screen divide-y-2`)
  .add(divideColorStyle({}))
  .add(bgColorStyle({}))
  .get();

const rowStyle = TailwindStyle.builder()
  .add(`divide-x-4 divide-dark dark:divide-light`)
  .get();

interface DemoProps {}

const Demo: FunctionComponent<DemoProps> = () => (
  <div className={demoStyle}>
    <Row className={rowStyle} responsive sm>
      <BadgeSection />
      <ActionSection />
    </Row>
    <Row className={rowStyle} responsive>
      <BreadcrumbSection />
      <TabsSection />
    </Row>
    <Row className={rowStyle} responsive>
      <CheckboxSection />
      <StorySection />
    </Row>
    <Row className={rowStyle} responsive>
      <MessageSection />
    </Row>
  </div>
);

export default Demo;
