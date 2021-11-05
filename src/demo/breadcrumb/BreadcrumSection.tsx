import Breadcrumb from "common/ui/widget/breadcrumb/Breadcrumb";
import Row from "common/ui/widget/row/Row";
import Section from "common/ui/widget/section/Section";
import { FunctionComponent } from "react";

const BreadcrumbSection: FunctionComponent = () => (      <Section
    className={`divide-secondary w-full`}
    title={{ size: "3xl", content: "Breadcrumb" }}
    articles={[
      {
        children: (
          <Row className="md:space-x-2">
            <Breadcrumb
              levels={[
                {
                  content: "level 1"
                },
                {
                  content: "level 2"
                },
                {
                  content: "level 3"
                },
                {
                  content: "level 4"
                }
              ]}
            />
          </Row>
        )
      }
    ]}
  />)
 
export default BreadcrumbSection;