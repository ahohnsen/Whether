import { ButtonStyled } from './Button.style';

export default function Button({ type, variant, onClick, children }) {
  return (
    <ButtonStyled type={type} variant={variant} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}
