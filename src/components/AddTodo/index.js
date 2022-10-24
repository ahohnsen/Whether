import Svg from "../Svg";
import Button from "../Button";
import { ModalBackground, Modal } from "./AddTodo.styled.js";
import { useState } from "react";

export default function AddTodo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="floating"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <Svg variant="add" color="#fff" />
      </Button>
      {isOpen && (
        <ModalBackground>
          <Modal>
            <Button
              type="button"
              variant="close"
              onClick={() => {
                setIsOpen((isOpen) => !isOpen);
              }}
            >
              <Svg variant="close" color="#3d3d3d" />
            </Button>

            {/* Here goes the form to add ToDos.  */}
          </Modal>
        </ModalBackground>
      )}
    </>
  );
}
