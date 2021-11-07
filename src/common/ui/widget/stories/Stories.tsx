import { divideColorStyle } from "common/ui/style/CommonStyles";
import { FunctionComponent } from "react";
import Story, { StoryProps } from "../story/Story";

interface StoriesProps {
  stories: StoryProps[];
  hoverable?: boolean;
}

const Stories: FunctionComponent<StoriesProps> = (props: StoriesProps) => (
  <div className={`divide-y ${divideColorStyle({})} w-full`}>
    {props.stories?.map((story) => (
      <Story {...story} {...props} />
    ))}
  </div>
);

export default Stories;
