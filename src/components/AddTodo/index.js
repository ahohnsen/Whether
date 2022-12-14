import RadioButton from '../RadioButton';
import Svg from '../Svg';
import Button from '../Button';
import { ModalBackground, Modal, Form, Input, ButtonGroup } from './AddTodo.styled.js';
import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddTodo(data);

    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  }

  return (
    <>
      <Button
        type='button'
        variant='floating'
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}>
        <Svg variant='add' color='#fff' />
      </Button>
      {isOpen && (
        <ModalBackground>
          <Modal>
            <Button
              type='button'
              variant='close'
              onClick={() => {
                setIsOpen((isOpen) => !isOpen);
              }}>
              <Svg variant='close' color='#3d3d3d' />
            </Button>

            {/* your challenge starts here...  */}
            <Form className='form' onSubmit={handleSubmit}>
              <h2 className='headline'>Add your new Todo</h2>
              <label htmlFor='add-todo'>Add new todo:</label>
              <Input type='text' id='add-todo' name='title' required maxLength='20' />
              <label htmlFor='choose-weather'>Choose weather:</label>
              <section id='choose-weather'>
                <RadioButton label='Bad' htmlFor='option-bad' name='weather' value='bad' />
                <RadioButton label='Good' htmlFor='option-good' name='weather' value='good' />
                <RadioButton
                  label='Always'
                  htmlFor='option-always'
                  name='weather'
                  value='always'
                  defaultChecked
                />
              </section>
              <ButtonGroup>
                <Button type='submit' variant='save'>
                  Save
                </Button>
                <Button
                  type='button'
                  variant='cancel'
                  onClick={() => {
                    setIsOpen((isOpen) => !isOpen);
                  }}>
                  Cancel
                </Button>
              </ButtonGroup>
            </Form>
            {/* end of form...  */}
          </Modal>
        </ModalBackground>
      )}
    </>
  );
}
