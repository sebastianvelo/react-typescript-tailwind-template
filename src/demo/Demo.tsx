import TailwindStyle from "common/tailwind/TailwindStyle";
import Card from "common/ui/components/card/Card";
import Carousel from "common/ui/components/carousel/Carousel";
import Row from "common/ui/layout/row/Row";
import {
  bgColorStyle,
  divideColorStyle
} from "common/ui/lib/style/CommonStyles";
import Color from "common/ui/lib/types/color/Color";
import { FunctionComponent } from "react";
import ActionSection from "./actions/ActionSection";
import BadgeSection from "./badges/BadgeSection";
import BreadcrumbSection from "./breadcrumb/BreadcrumbSection";
import CheckboxSection from "./checkbox/CheckboxSection";
import LoadingSection from "./loading/LoadingSection";
import MessageSection from "./messages/MessageSection";
import ModalSection from "./modal/ModalSection";
import StorySection from "./stories/StorySection";
import TabsSection from "./tabs/TabsSection";

export const cardProps = {
  header: `Title`,
  body: {
    title: "Body title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  footer: {
    actions: [
      {
        content: `Cancel`,
        url: `#`,
        onClick: () => {},
        color: "danger" as Color
      },
      {
        content: `Accept`,
        url: `#`,
        onClick: () => {},
        color: "success" as Color
      }
    ]
  }
};

const demoStyle = TailwindStyle.builder()
  .add(`min-h-screen w-screen divide-y-2 filter`)
  .add(divideColorStyle({}))
  .add(bgColorStyle({}))
  .get();

const rowStyle = TailwindStyle.builder()
  .add(`divide-x-4 divide-dark dark:divide-light`)
  .get();

interface DemoProps {}

const Demo: FunctionComponent<DemoProps> = () => (
  <main className={demoStyle}>
    <Row className={rowStyle} responsive md>
      <BadgeSection />
      <ActionSection />
    </Row>
    <Row className={rowStyle} responsive md>
      <BreadcrumbSection />
      <ModalSection />
      <LoadingSection />
    </Row>
    <Row className={rowStyle} responsive md>
      <CheckboxSection />
      <TabsSection />
    </Row>
    <Row className={rowStyle} responsive md>
      <StorySection />
      <MessageSection />
    </Row>
    <Row className={rowStyle} responsive md>
      <Carousel id="demo">
        {Array(20)
          .fill(cardProps)
          .map((card) => (
            <div className="w-64 border border-black p-2">
              <Card {...card} />
            </div>
          ))}
      </Carousel>
    </Row>
  </main>
);

export default Demo;
