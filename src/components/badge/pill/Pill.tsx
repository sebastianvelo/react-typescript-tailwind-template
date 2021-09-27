import { FunctionComponent } from "react";

const PILL_CLASS_NAME = `rounded-md bg-primary w-20 h-6 px-2`;

interface PillProps {
    label?: string;
}

const Pill: FunctionComponent<PillProps> = (props: PillProps) => {
    return (
        <div className={PILL_CLASS_NAME}>
            {props.label}
        </div>
    );
}

export default Pill;