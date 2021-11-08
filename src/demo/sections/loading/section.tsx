import Loading from "common/ui/components/loading/Loading";
import Row from "common/ui/layout/row/Row";
import { ComponentSectionProps } from "demo/common/ComponentSection";

const loadingSection: ComponentSectionProps = {
  title: "Loading",
  articles: [
    {
      children: (
        <Row>
          <Loading isLoading={true} content={`Some info text...`} />
        </Row>
      )
    }
  ]
};

export default loadingSection;
