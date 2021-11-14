import Loading from "ui/components/loading/Loading";
import Row from "ui/layout/row/Row";
import { ComponentSectionProps } from "demo/common/ComponentSection";

const loadingSection: ComponentSectionProps = {
  title: "Loading",
  articles: [
    {
      children: (
        <Row>
          <Loading isLoading={true} children={`Some info text...`} />
        </Row>
      )
    }
  ]
};

export default loadingSection;
