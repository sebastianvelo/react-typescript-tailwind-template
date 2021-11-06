import Action, { ActionProps } from "common/ui/components/action/Action";
import { FunctionComponent } from "react";

export interface ContentProps {
  actions?: ActionProps[];
}

const Content: FunctionComponent<ContentProps> = (props: ContentProps) => (
  <div className={`flex flex-col w-28 shadow-xl border border-gray-200 px-2 py-2 space-y-2 rounded-md absolute bg-gray-50 left-2`}>
    {props.actions?.map((action) => (
      <Action {...action} />
    ))}
  </div>
);

export default Content;
