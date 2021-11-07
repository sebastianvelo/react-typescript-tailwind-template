import Breadcrumb from "common/ui/components/breadcrumb/Breadcrumb";
import Row from "common/ui/layout/row/Row";
import Section from "common/ui/layout/section/Section";
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
