import TailwindStyle from "common/tailwind/TailwindStyle";
import ParentProps from "common/ui/lib/props/ParentProps";
import CheckboxLabel, {
  CheckboxLabelProps
} from "common/ui/atomic/checkbox/CheckboxLabel";
import { bgColorHoverableStyle } from "common/ui/lib/style/CommonStyles";
import { FunctionComponent } from "react";
import Row from "../../../layout/row/Row";

const itemStyle = TailwindStyle.builder()
  .add(`items-center cursor-pointer justify-between h-10 px-2`)
  .add(bgColorHoverableStyle({}))
  .get();

export interface CheckboxListItemProps extends ParentProps {
  checkbox?: CheckboxLabelProps;
  left?: boolean;
}

const CheckboxListItem: FunctionComponent<CheckboxListItemProps> = (
  props: CheckboxListItemProps
) => (
  <Row reverse={!props.left} className={itemStyle}>
    <CheckboxLabel {...props.checkbox} />
    {props.children}
  </Row>
);

export default CheckboxListItem;
