import { Wrapper, Emoji } from "./InfoBox.styled";

export default function InfoBox({ emoji }) {
  return (
    <Wrapper>
      current weather:
      <Emoji role="img" aria-label="current weather emoji">
        {emoji}
      </Emoji>
    </Wrapper>
  );
}
