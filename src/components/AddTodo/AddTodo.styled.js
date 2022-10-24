import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Modal = styled.div`
  position: relative;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 90%;
  z-index: 10;
  border-radius: 3px;
  box-shadow: 0 0 10px rgb(0 0 0 / 6%), 0 5px 20px rgb(0 0 0 / 5%);
  transform: translate(-50%, -50%);
`;
const Form = styled.form`
  margin: 10px auto;
  display: grid;
  gap: 1rem;
  width: 80%;
`;

const Input = styled.input`
  -webkit-appearance: none;
  border: 1px solid lightgrey;
  height: 2.2em;
  width: 100%;
  font: inherit;
  padding: 0.6em 1.7em 0.55em 1.7em;
  border-radius: 0.3em;
`;

const ButtonGroup = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
`;

export { ModalBackground, Modal, Form, Input, ButtonGroup };
