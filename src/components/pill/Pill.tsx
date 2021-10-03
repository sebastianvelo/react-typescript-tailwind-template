import { FunctionComponent } from "react";
import ComponentClass from "style/ComponentClass";

export interface PillProps {
    label?: string;
    className?: string;
}

const Pill: FunctionComponent<PillProps> = (props: PillProps) => {
    return (
        <div className={ComponentClass.PILL(props)}>
            {props.label}
        </div>
    );
}

export default Pill;