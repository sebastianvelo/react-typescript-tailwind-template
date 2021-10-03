import { ActionProps } from "components/action/Action";
import { PillProps } from "components/pill/Pill";
import { TabContentProps } from "components/tabs/tab-content/TabContent";
import { TabProps } from "components/tabs/tab/Tab";
import ComponentStyle from "./ComponentStyle";
import TailwindClass from "./tailwind/TailwindClass";

const ComponentClass = {
  ACTION: (props: ActionProps) =>
    TailwindClass.builder()
      .add(ComponentStyle.ACTION)
      .add(props.color)
      .add(props.className)
      .build(),
  PILL: (props: PillProps) =>
    TailwindClass.builder()
      .add(ComponentStyle.PILL)
      .add(props.className)
      .build(),
  TAB: (props: TabProps) =>
    TailwindClass.builder()
      .add(ComponentStyle.TAB)
      .addIf(ComponentStyle.TAB_ACTIVE, props.active)
      .build(),
  TAB_CONTENT: (props: TabContentProps) =>
    TailwindClass.builder()
    .addIf(ComponentStyle.TAB_CONTENT_HIDDEN, !props.active)
    .build(),
};

export default ComponentClass;
