import Row from "common/ui/layout/row/Row";
import Section from "common/ui/layout/section/Section";
import Story from "common/ui/components/story/Story";
import Stories from "common/ui/lists/stories/Stories";
import { FunctionComponent } from "react";
import { sectionProps, storiesProps, storyProps } from "./mock/Mock";

const StorySection: FunctionComponent = () => (
  <Section
    {...sectionProps}
    articles={[
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
    ]}
  />
);

export default StorySection;
