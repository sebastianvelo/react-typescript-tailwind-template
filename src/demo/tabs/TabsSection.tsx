import Title from "common/ui/components/title/Title";
import Row from "common/ui/widget/row/Row";
import Section from "common/ui/widget/section/Section";
import Tabs from "common/ui/widget/tabs/Tabs";
import { FunctionComponent } from "react";

const TabsSection: FunctionComponent = () => (
  <Section
    className={`w-full`}
    title={{
      size: "3xl",
      className: "bg-dark p-2",
      color: "primary",
      content: "Tabs"
    }}
    articles={[
      {
        children: (
          <Row className="md:space-x-2">
            <Tabs
              tabs={[
                {
                  header: "Tab 1",
                  content: (
                    <Title
                      className={`w-full h-full bg-secondary-light`}
                      content={`Tab 1 content!`}
                    />
                  )
                },
                {
                  header: "Tab 2",
                  content: (
                    <Title
                      className={`w-full h-full bg-success`}
                      content={`Tab 2 content!`}
                    />
                  )
                },
                {
                  header: "Tab 3",
                  content: (
                    <Title
                      className={`w-full h-full bg-warning`}
                      content={`Tab 3 content!`}
                    />
                  )
                }
              ]}
            />
          </Row>
        )
      }
    ]}
  />
);

export default TabsSection;
