import Story from "ui/components/story/Story";
import Row from "ui/layout/row/Row";
import StoryList from "ui/lists/stories/StoryList";
import { ComponentSectionProps } from "demo/common/ComponentSection";
import { storyProps, storiesProps } from "./mock";

const storiesSection: ComponentSectionProps = {
  title: "Stories",
  articles: [
    {
      title: { size: "2xl", content: "Story" },
      children: (
        <Row className="md:space-x-2">
          <div className={`w-full`}>
            <Story {...storyProps} />
          </div>
        </Row>
      )
    },
    {
      title: { size: "2xl", content: "Stories" },
      children: (
        <Row className="md:space-x-2">
          <StoryList stories={storiesProps} />
        </Row>
      )
    }
  ]
};

export default storiesSection;
