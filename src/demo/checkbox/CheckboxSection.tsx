import CheckboxLabel from "common/ui/components/checkbox/CheckboxLabel";
import CheckboxList from "common/ui/widget/checkbox-list/CheckboxList";
import Row from "common/ui/widget/row/Row";
import Section from "common/ui/widget/section/Section";
import { FunctionComponent } from "react";
import { checkboxListProps, sectionProps } from "./mock/Mock";

const CheckboxSection: FunctionComponent = () => (
  <Section
    {...sectionProps}
    articles={[
      {
        title: { size: "2xl", content: "Checkbox" },
        children: (
          <Row className="md:space-x-2">
            <CheckboxLabel
              label={`Lorem ipsum dolor sit amet, consectetur adipiscin`}
            />
          </Row>
        )
      },
      {
        title: { size: "2xl", content: "Checkbox list right" },
        children: (
          <Row className="md:space-x-2">
            <CheckboxList {...checkboxListProps} />
          </Row>
        )
      },
      {
        title: { size: "2xl", content: "Checkbox list left" },
        children: (
          <Row className="md:space-x-2">
            <CheckboxList left {...checkboxListProps} />
          </Row>
        )
      }
    ]}
  />
);

export default CheckboxSection;
