import RadioButton from "../RadioButton/";
import Svg from "../Svg";
import Button from "../Button";
import { ModalBackground, Modal, Form, CloseButton } from "./AddTodo.styled.js";
import { useState } from "react";

export default function AddTodo({ onAddTodo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <Svg variant="add" color="tomato" />
      </Button>
      {isOpen && (
        <ModalBackground>
          <Modal>
            <CloseButton>
              <Button
                type="button"
                onClick={() => {
                  setIsOpen((isOpen) => !isOpen);
                }}
              >
                <Svg variant="close" color="tomato" />
              </Button>
            </CloseButton>
            <Form className="form" onSubmit={onAddTodo}>
              <h2 className="headline">Add your new Todo</h2>
              <label htmlFor="add-todo">Add new todo:</label>
              <input type="text" id="add-todo" name="title" />
              <label htmlFor="choose-weather">Choose weather:</label>
              <section id="choose-weather">
                <RadioButton label="Bad" htmlFor="option-bad" name="weather" value="bad" />
                <RadioButton label="Good" htmlFor="option-good" name="weather" value="good" />
                <RadioButton label="Always" htmlFor="option-always" name="weather" value="always" />
              </section>
              <div>
                <Button type="submit">Save</Button>
                <Button
                  type="button"
                  onClick={() => {
                    setIsOpen((isOpen) => !isOpen);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </Modal>
        </ModalBackground>
      )}
    </>
  );
}
