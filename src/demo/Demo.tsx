/* eslint-disable @typescript-eslint/no-unused-vars */
import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { FunctionComponent, useState } from "react";
import {
  bgColorStyle
} from "ui/common/style/CommonStyles";
import Color from "ui/common/types/color/Color";
import Article from "ui/layout/article/Article";
import ActionList from "ui/lists/actions/ActionList";
import ComponentSection from "./common/ComponentSection";
import ComponentSections from "./common/ComponentSections";
import actionsSection from "./sections/actions/section";

const demoStyle = TailwindStyle.builder()
  .add("w-screen flex divide-x-4 divide-primary")
  .add(bgColorStyle({}))
  .get();

interface DemoProps {}

const Demo: FunctionComponent<DemoProps> = () => {
  const [component, setComponent] = useState(actionsSection);
  return (
    <main className={demoStyle}>
      <aside className={"w-1/4 min-h-screen"}>
        <Article
          title={{
            children: "Components",
            size: "3xl",
            className: "bg-primary p-2"
          }}
        >
          <ActionList
            className={"flex flex-col"}
            actions={ComponentSections.map((section) => ({
              children: section.label,
              url: "#",
              color: "primary" as Color,
              quiet: true,
              onClick: () => setComponent(section.props)
            }))}
          />
        </Article>
      </aside>
      <div className={"w-3/4"}>
        <ComponentSection {...component} />
      </div>
    </main>
  );
};

export default Demo;
