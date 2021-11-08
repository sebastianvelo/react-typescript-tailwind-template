import Action from "common/ui/components/action/Action";
import ButtonDropdown from "common/ui/components/button-dropdown/ButtonDropdown";
import Row from "common/ui/layout/row/Row";
import { ComponentSectionProps } from "demo/common/ComponentSection";
import { actions, dropdownActions } from "./mock";

const actionsSection: ComponentSectionProps = {
  title: "Actions",
  articles: [
    {
      title: { content: "Buttons loud" },
      children: (
        <Row className="md:space-x-2">
          {actions.map((action) => (
            <Action {...action} onClick={() => {}} />
          ))}
        </Row>
      )
    },
    {
      title: { content: "Buttons quiet" },
      children: (
        <Row className="md:space-x-2">
          {actions.map((action) => (
            <Action {...action} quiet={true} onClick={() => {}} />
          ))}
        </Row>
      )
    },
    {
      title: { content: "Dropdown loud" },
      children: (
        <Row className="md:space-x-2" responsive>
          {actions.map((action) => (
            <ButtonDropdown {...action} actions={dropdownActions} />
          ))}
        </Row>
      )
    },
    {
      title: { content: "Dropdown quiet" },
      children: (
        <Row className="md:space-x-2" responsive>
          {actions.map((action) => (
            <ButtonDropdown {...action} quiet={true} actions={dropdownActions} />
          ))}
        </Row>
      )
    },
    {
      title: { content: "Anchors & Links" },
      children: (
        <Row className="md:space-x-2">
          {actions.map((action) => (
            <Action {...action} />
          ))}
        </Row>
      )
    }
  ]
};

export default actionsSection;
