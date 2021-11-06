import CheckboxLabel from "common/ui/components/checkbox/CheckboxLabel";
import CheckboxList from "common/ui/widget/checkbox-list/CheckboxList";
import Row from "common/ui/widget/row/Row";
import Section from "common/ui/widget/section/Section";
import { FunctionComponent } from "react";

const CheckboxSection: FunctionComponent = () => (
  <Section
    className={`w-full`}
    title={{
      content: "Checkbox",
      size: "3xl",
      className: "bg-dark p-2",
      color: "primary"
    }}
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
            <CheckboxList
              items={[
                {
                  children: "First checkbox",
                  checkbox: {
                    label: "first"
                  }
                },
                {
                  children: "Second checkbox",
                  checkbox: {
                    label: "second"
                  }
                },
                {
                  children: "Third checkbox",
                  checkbox: {
                    label: "thrid"
                  }
                }
              ]}
            />
          </Row>
        )
      },
      {
        title: { size: "2xl", content: "Checkbox list left" },
        children: (
          <Row className="md:space-x-2">
            <CheckboxList
              left
              items={[
                {
                  children: "First checkbox",
                  checkbox: {
                    label: "first"
                  }
                },
                {
                  children: "Second checkbox",
                  checkbox: {
                    label: "second"
                  }
                },
                {
                  children: "Third checkbox",
                  checkbox: {
                    label: "thrid"
                  }
                }
              ]}
            />
          </Row>
        )
      },
    ]}
  />
);

export default CheckboxSection;
