import Story from "common/ui/components/story/Story";
import Row from "common/ui/layout/row/Row";
import Stories from "common/ui/lists/stories/Stories";
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
          <Stories stories={storiesProps} />
        </Row>
      )
    }
  ]
};

export default storiesSection;
