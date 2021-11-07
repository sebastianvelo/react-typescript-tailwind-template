import Breadcrumb from "common/ui/widget/breadcrumb/Breadcrumb";
import Row from "common/ui/widget/row/Row";
import Section from "common/ui/widget/section/Section";
import { FunctionComponent } from "react";
import { breadcrumbProps, sectionProps } from "./mock/Mock";

const BreadcrumbSection: FunctionComponent = () => (
  <Section
    {...sectionProps}
    articles={[
      {
        children: (
          <Row className="md:space-x-2">
            <Breadcrumb {...breadcrumbProps} />
          </Row>
        )
      }
    ]}
  />
);

export default BreadcrumbSection;
