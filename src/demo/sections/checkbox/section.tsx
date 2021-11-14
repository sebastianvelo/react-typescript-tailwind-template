import CheckboxLabel from "ui/atomic/checkbox/CheckboxLabel";
import Row from "ui/layout/row/Row";
import CheckboxList from "ui/lists/checkbox/CheckboxList";
import { ComponentSectionProps } from "demo/common/ComponentSection";
import { checkboxListProps } from "./mock";

const checkboxSection: ComponentSectionProps = {
  title: "Checkbox",
  articles: [
    {
      title: { size: "2xl", children: "Checkbox" },
      children: (
        <Row className="md:space-x-2">
          <CheckboxLabel
            label={`Lorem ipsum dolor sit amet, consectetur adipiscin`}
          />
        </Row>
      )
    },
    {
      title: { size: "2xl", children: "Checkbox list right" },
      children: (
        <Row className="md:space-x-2">
          <CheckboxList {...checkboxListProps} />
        </Row>
      )
    },
    {
      title: { size: "2xl", children: "Checkbox list left" },
      children: (
        <Row className="md:space-x-2">
          <CheckboxList left {...checkboxListProps} />
        </Row>
      )
    }
  ]
};

export default checkboxSection;
