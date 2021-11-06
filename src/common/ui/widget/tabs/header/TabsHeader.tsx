import TailwindStyle from "common/tailwind/TailwindStyle";
import { transitionStyle } from "common/ui/style/CommonStyles";
import { FunctionComponent } from "react";

const getTabHeaderStyle = (i: number, active: number) =>
  TailwindStyle.builder()
    .add(transitionStyle())
    .add(`text-center w-full cursor-pointer border-b-2 `)
    .addIf(`border-primary`, i === active)
    .addIf(`border-transparent`, i !== active)
    .get();

interface TabsHeaderProps {
  setTabActive: (i: number) => void;
  tabActive: number;
  headers?: string[];
}

const TabsHeader: FunctionComponent<TabsHeaderProps> = (
  props: TabsHeaderProps
) => (
  <div
    className={`flex space-x-2 justify-around overflow-x-scroll flex-nowrap`}
  >
    {props.headers?.map((tab, i) => (
      <div
        className={getTabHeaderStyle(i, props.tabActive)}
        onClick={() => props.setTabActive(i)}
      >
        {tab}
      </div>
    ))}
  </div>
);

export default TabsHeader;
