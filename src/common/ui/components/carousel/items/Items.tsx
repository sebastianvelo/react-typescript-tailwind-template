import ParentProps from "common/ui/lib/props/ParentProps";
import { FunctionComponent } from "react";

export interface ItemsProps extends ParentProps {
    id: string;
}

const Items: FunctionComponent<ItemsProps> = (props: ItemsProps) => (
        <div className="overflow-scroll lg:overflow-hidden space-x-6 flex py-6" id={props.id} style={{ scrollBehavior: 'smooth' }}>
            {props.children}
        </div>
    )

export default Items;