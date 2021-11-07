import Row from "common/ui/widget/row/Row";
import Section from "common/ui/widget/section/Section";
import Stories from "common/ui/widget/stories/Stories";
import Story from "common/ui/widget/story/Story";
import { FunctionComponent } from "react";
import { storiesProps, storyProps } from "./mock/Mock";

const StorySection: FunctionComponent = () => (
  <Section
    className={`w-full`}
    title={{
      content: "Story",
      size: "3xl",
      className: "bg-dark p-2",
      color: "primary"
    }}
    articles={[
      {
        title: { size: "2xl", content: "Story" },
        children: (
          <Row className="md:space-x-2">
            <Story {...storyProps} />
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
