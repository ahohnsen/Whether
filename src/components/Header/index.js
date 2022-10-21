import { Wrapper, Headline, Emoji } from './Header.styled';

export default function Header() {
  return (
    <Wrapper>
      <Headline>
        WHETHER{' '}
        <Emoji role='img' aria-label='whether logo emoji'>
          🌤
        </Emoji>
      </Headline>
    </Wrapper>
  );
}
