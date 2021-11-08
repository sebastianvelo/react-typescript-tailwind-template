import Pagination from "common/ui/components/pagination/Pagination";
import Row from "common/ui/layout/row/Row";
import { ComponentSectionProps } from "demo/common/ComponentSection";

const paginationSection: ComponentSectionProps = {
  title: "Pagination",
  articles: [
    {
      children: (
        <>
          <Row className="md:space-y-2">
            <Pagination size={10} active={2} color="primary" />
            <Pagination size={10} active={4} color="secondary" />
            <Pagination size={10} active={6} color="success" />
            <Pagination size={10} active={3} color="danger" />
            <Pagination size={10} active={5} color="warning" />
            <Pagination size={10} active={7} color="info" />
          </Row>
        </>
      )
    }
  ]
};

export default paginationSection;
