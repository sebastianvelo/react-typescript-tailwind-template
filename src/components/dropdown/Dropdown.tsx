import { FunctionComponent } from "react";
import ComponentStyle from "style/ComponentStyle";

interface DropdownProps {
    trigger: React.ReactNode | React.ReactNode[];
    content: React.ReactNode | React.ReactNode[];
}
 
const Dropdown: FunctionComponent<DropdownProps> = (props: DropdownProps) => {
    return ( 
        <details className={ComponentStyle.DROPDOWN}>
            <summary>{props.trigger}</summary>
            {props.content}
        </details>
     );
}
 
export default Dropdown;