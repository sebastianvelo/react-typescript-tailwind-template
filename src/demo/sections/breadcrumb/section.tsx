import Breadcrumb from "common/ui/components/breadcrumb/Breadcrumb";
import Row from "common/ui/layout/row/Row";
import { ComponentSectionProps } from "demo/common/ComponentSection";
import { breadcrumbProps } from "./mock";

const breadcrumbSection: ComponentSectionProps = {
  title: "Breadcrumb",
  articles: [
    {
      children: (
        <Row className="md:space-x-2">
        <Breadcrumb {...breadcrumbProps} />
      </Row>
      )
    }
  ]
};

export default breadcrumbSection;
