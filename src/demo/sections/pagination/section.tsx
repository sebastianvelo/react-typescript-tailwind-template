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
            <Pagination
              size={10}
              quantityToShow={4}
              active={1}
              color="primary"
            />
          </Row>

          <Row className="md:space-y-2">
            <Pagination
              size={10}
              quantityToShow={6}
              active={2}
              color="secondary"
            />
          </Row>

          <Row className="md:space-y-2">
            <Pagination
              size={10}
              quantityToShow={5}
              active={3}
              color="success"
            />
          </Row>

          <Row className="md:space-y-2">
            <Pagination
              size={10}
              quantityToShow={6}
              active={4}
              color="danger"
            />
          </Row>

          <Row className="md:space-y-2">
            <Pagination
              size={10}
              quantityToShow={6}
              active={5}
              color="warning"
            />
          </Row>

          <Row className="md:space-y-2">
            <Pagination size={10} quantityToShow={6} active={6} color="info" />
          </Row>
          <Row className="md:space-y-2">
            <Pagination size={10} quantityToShow={6} active={7} color="primary" />
          </Row>
          <Row className="md:space-y-2">
            <Pagination size={10} quantityToShow={6} active={8} color="secondary" />
          </Row>
          <Row className="md:space-y-2">
            <Pagination size={10} quantityToShow={6} active={9} color="success" />
          </Row>
          <Row className="md:space-y-2">
            <Pagination size={10} quantityToShow={6} active={10} color="danger" />
          </Row>
        </>
      )
    }
  ]
};

export default paginationSection;
