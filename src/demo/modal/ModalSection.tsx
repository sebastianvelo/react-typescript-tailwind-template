import useModal from "common/hooks/useModal";
import ActionButton from "common/ui/atomic/button/ActionButton";
import Row from "common/ui/components/row/Row";
import Section from "common/ui/layout/section/Section";
import { FunctionComponent } from "react";
import { modalProps, sectionProps } from "./mock/Mock";

const ModalSection: FunctionComponent = () => {
  const [modal, toggleModal] = useModal(modalProps);
  return (
    <Section
      {...sectionProps}
      articles={[
        {
          children: (
            <Row>
              <ActionButton
                onClick={toggleModal}
                content="Open modal"
                color="primary"
              />
              {modal}
            </Row>
          )
        }
      ]}
    />
  );
};

export default ModalSection;
