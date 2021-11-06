import ParentProps from "common/ui/common/props/ParentProps";
import CheckboxLabel, {
  CheckboxLabelProps
} from "common/ui/components/checkbox/CheckboxLabel";
import { FunctionComponent } from "react";
import Row from "../row/Row";

export interface CheckboxListItemProps extends ParentProps {
  checkbox?: CheckboxLabelProps;
  left?: boolean;
}

const CheckboxListItem: FunctionComponent<CheckboxListItemProps> = (
  props: CheckboxListItemProps
) => (
  <Row reverse={!props.left} className={`items-center cursor-pointer justify-between hover:bg-gray-50 h-10 px-2`}>
    <CheckboxLabel {...props.checkbox} />
    {props.children}
  </Row>
);

export default CheckboxListItem;
