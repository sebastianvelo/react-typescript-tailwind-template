import TailwindStyle from "common/tailwind/TailwindStyle";
import {
  bgColorStyle,
  borderColorStyle
} from "common/ui/lib/style/CommonStyles";
import { FunctionComponent } from "react";
import Action from "../../action/Action";
import Card, { CardProps } from "../../card/Card";

const modalStyle = () =>
  TailwindStyle.builder()
    .add(`w-1/2 h-96 border px-8 py-4 rounded-md relative`)
    .add(borderColorStyle({}))
    .add(bgColorStyle({}))
    .get();

export interface ModalProps extends CardProps {
  toggleOpen?: () => void;
}

const Modal: FunctionComponent<ModalProps> = (props: ModalProps) => (
  <div className={modalStyle()}>
    <Action content="X" color={"danger"} onClick={props.toggleOpen} className="absolute right-0 mr-6"/>
    <Card {...props} />
  </div>
);

export default Modal;
