import { ModalProps } from "common/ui/components/modal/modal/Modal";
import ModalWrapper from "common/ui/components/modal/ModalWrapper";
import useToggle from "./useToggle";

const useModal = (props: ModalProps): [JSX.Element, () => void] => {
  const [isOpen, toggleOpen] = useToggle(false);

  return [
    <ModalWrapper isOpen={isOpen} toggleOpen={toggleOpen} modal={props} />,
    toggleOpen
  ];
};

export default useModal;
