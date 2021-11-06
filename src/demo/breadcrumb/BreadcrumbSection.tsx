import Breadcrumb from "common/ui/widget/breadcrumb/Breadcrumb";
import Row from "common/ui/widget/row/Row";
import Section from "common/ui/widget/section/Section";
import { FunctionComponent } from "react";
import { breadcrumbProps } from "./mock/BreadcrumbMock";

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
            <Breadcrumb {...breadcrumbProps} />
          </Row>
        )
      }
    ]}
  />
);

export default BreadcrumbSection;
