import Action from "common/ui/components/action/Action";
import ButtonDropdown from "common/ui/components/button-dropdown/ButtonDropdown";
import Row from "common/ui/layout/row/Row";
import Size from "common/ui/lib/types/size/Size";
import { ComponentSectionProps } from "demo/common/ComponentSection";
import { actions, dropdownActions } from "./mock";

const actionsSection: ComponentSectionProps = {
  title: "Actions",
  articles: [
    {
      title: { content: "Buttons loud" },
      children: (
        <>
          {(["s", "m", "l"] as Size[]).map((size: Size) => (
            <Row className="md:space-x-2" responsive>
              {actions.map((action) => (
                <Action {...action} size={size} onClick={() => {}} />
              ))}
            </Row>
          ))}
        </>
      )
    },
    {
      title: { content: "Buttons quiet" },
      children: (
        <>
          {(["s", "m", "l"] as Size[]).map((size: Size) => (
            <Row className="md:space-x-2" responsive>
              {actions.map((action) => (
                <Action {...action} size={size} onClick={() => {}} quiet />
              ))}
            </Row>
          ))}
        </>
      )
    },
    {
      title: { content: "Dropdown loud" },
      children: (
        <>
          {(["s", "m", "l"] as Size[]).map((size: Size) => (
            <Row className="md:space-x-2" responsive>
              {actions.map((action) => (
                <ButtonDropdown
                  {...action}
                  actions={dropdownActions}
                  size={size}
                />
              ))}
            </Row>
          ))}
        </>
      )
    },
    {
      title: { content: "Dropdown quiet" },
      children: (
        <>
          {(["s", "m", "l"] as Size[]).map((size: Size) => (
            <Row className="md:space-x-2" responsive>
              {actions.map((action) => (
                <ButtonDropdown
                  {...action}
                  actions={dropdownActions}
                  size={size}
                  quiet
                />
              ))}
            </Row>
          ))}
        </>
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
