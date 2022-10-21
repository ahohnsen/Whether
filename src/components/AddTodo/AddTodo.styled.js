import styled from "styled-components";

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
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
  transform: translate(-50%, -50%);
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;
const Form = styled.form`
  margin: 10px;
  display: grid;
  gap: 1rem;
`;

const CloseButton = styled.div`
  position: absolute;
  top: -15px;
  right: -10px;
`;

export { ModalBackground, Modal, Form, CloseButton };
