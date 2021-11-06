import TailwindStyle from "common/tailwind/TailwindStyle";
import React, { FunctionComponent } from "react";

const getTabContentStyle = (i: number, active: number) =>
  TailwindStyle.builder()
    .addIf(`hidden`, i !== active)
    .get();

interface TabsContentProps {
  tabActive: number;
  contents?: (React.ReactNode | React.ReactNode[])[];
}

const TabsContent: FunctionComponent<TabsContentProps> = (props: TabsContentProps) => (
  <div>
    {props.contents?.map((content, i) => (
      <div className={getTabContentStyle(i, props.tabActive)}>{content}</div>
    ))}
  </div>
);

export default TabsContent;
