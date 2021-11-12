import useModal from "common/hooks/useModal";
import ActionButton from "ui/atomic/button/ActionButton";
import Row from "ui/layout/row/Row";
import { ComponentSectionProps } from "demo/common/ComponentSection";
import { FunctionComponent } from "react";
import { modalProps } from "./mock";

const ModalSection: FunctionComponent = () => {
  const [modal, toggleModal] = useModal(modalProps);
  return (
    <Row>
      <ActionButton onClick={toggleModal} content="Open modal" color="primary" />
      {modal}
    </Row>
  );
};

const modalSection: ComponentSectionProps = {
  title: "Modal",
  articles: [
    {
      children: <ModalSection />
    }
  ]
};

export default modalSection;
