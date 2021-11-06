import Breadcrumb from "common/ui/widget/breadcrumb/Breadcrumb";
import Row from "common/ui/widget/row/Row";
import Section from "common/ui/widget/section/Section";
import { FunctionComponent } from "react";

const BreadcrumbSection: FunctionComponent = () => (
  <Section
    className={`w-full`}
    title={{
      content: "Breadcrumb",
      size: "3xl",
      className: "bg-dark p-2",
      color: "primary"
    }}
    articles={[
      {
        children: (
          <Row className="md:space-x-2">
            <Breadcrumb
              levels={[
                {
                  content: "Level 1"
                },
                {
                  content: "Level 2"
                },
                {
                  content: "Level 3"
                },
                {
                  content: "Level 4"
                }
              ]}
            />
          </Row>
        )
      }
    ]}
  />
);

export default BreadcrumbSection;
