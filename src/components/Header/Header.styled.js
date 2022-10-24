import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  background-color: #eef0eb;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid lightgrey;
`;

const Headline = styled.h1`
  align-items: center;
  padding-left: 1.5rem;
`;

const Emoji = styled.span`
  font-size: 2.4rem;
`;

export { Wrapper, Headline, Emoji };
