import { ActionProps } from "components/action/Action";
import { PillProps } from "components/badge/pill/Pill";
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
};

export default ComponentClass;
