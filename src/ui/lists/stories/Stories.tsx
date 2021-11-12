import Story, { StoryProps } from "ui/components/story/Story";
import { divideColorStyle } from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";

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
