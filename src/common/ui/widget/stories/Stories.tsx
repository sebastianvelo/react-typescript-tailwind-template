import { FunctionComponent } from "react";
import Story, { StoryProps } from "../story/Story";

interface StoriesProps {
  stories: StoryProps[];
  hoverable?: boolean;
}

const Stories: FunctionComponent<StoriesProps> = (props: StoriesProps) => (
  <div className="divide-y divide-gray-100 w-full">
    {props.stories?.map((story) => (
      <Story {...story} {...props} />
    ))}
  </div>
);

export default Stories;
