import { FunctionComponent } from "react";
import CheckboxListItem, { CheckboxListItemProps } from "./CheckboxListItem";

interface CheckboxListProps {
  items?: CheckboxListItemProps[];
  left?: boolean;
}

const CheckboxList: FunctionComponent<CheckboxListProps> = (props) => (
  <div className="w-full">
    {props.items?.map((item) => (
      <CheckboxListItem {...item} left={props.left} />
    ))}
  </div>
);

export default CheckboxList;
