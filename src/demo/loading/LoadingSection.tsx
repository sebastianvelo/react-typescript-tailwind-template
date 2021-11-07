import Loading from "common/ui/components/loading/Loading";
import Row from "common/ui/layout/row/Row";
import Section from "common/ui/layout/section/Section";
import { FunctionComponent } from "react";
import { sectionProps } from "./mock/Mock";

const LoadingSection: FunctionComponent = () => (
  <Section
    {...sectionProps}
    articles={[
      {
        children: (
          <Row>
            <Loading isLoading={false} content={`Some info text...`}/>
          </Row>
        )
      }
    ]}
  />
);

export default LoadingSection;
