import Action from "common/ui/components/action/Action";
import Color from "common/ui/types/color/Color";
import ButtonDropdown from "common/ui/widget/button-dropdown/ButtonDropdown";
import Row from "common/ui/widget/row/Row";
import Section from "common/ui/widget/section/Section";
import { FunctionComponent } from "react";

const actions: { content: string; color: Color }[] = [
  {
    content: "Primary",
    color: "primary"
  },
  {
    content: "Secondary",
    color: "secondary"
  },
  {
    content: "Success",
    color: "success"
  },
  {
    content: "Danger",
    color: "danger"
  },
  {
    content: "Warning",
    color: "warning"
  },
  {
    content: "Info",
    color: "info"
  }
];

const dropdownActions = [
  {
    content: `Action 1`,
    url: `#`
  },
  {
    content: `Action 2`,
    url: `#`
  },
  {
    content: `Action 3`,
    url: `#`
  },
  {
    content: `Action 4`,
    url: `#`
  }
];

const ActionSection: FunctionComponent = () => (
  <Section
    className={`w-full`}
    title={{
      size: "3xl",
      className: "bg-dark p-2",
      color: "primary",
      content: "Actions"
    }}
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
