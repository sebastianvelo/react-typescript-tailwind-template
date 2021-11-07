import Action from "common/ui/components/action/Action";
import ButtonDropdown from "common/ui/components/button-dropdown/ButtonDropdown";
import Row from "common/ui/layout/row/Row";
import Section from "common/ui/layout/section/Section";
import { FunctionComponent } from "react";
import { actions, dropdownActions, sectionProps } from "./mock/Mock";

const ActionSection: FunctionComponent = () => (
  <Section
    {...sectionProps}
    articles={[
      {
        title: { size: "2xl", content: "Buttons" },
        children: (
          <Row className="md:space-x-2">
            {actions.map((action) => (
              <Action {...action} onClick={() => {}} />
            ))}
          </Row>
        )
      },
      {
        title: { size: "2xl", content: "Dropdown" },
        children: (
          <Row className="md:space-x-2" responsive>
            {actions.map((action) => (
              <ButtonDropdown {...action} actions={dropdownActions} />
            ))}
          </Row>
        )
      },
      {
        title: { size: "2xl", content: "Anchors & Links" },
        children: (
          <Row className="md:space-x-2">
            {actions.map((action) => (
              <Action {...action} />
            ))}
          </Row>
        )
      }
    ]}
  />
);

export default ActionSection;
