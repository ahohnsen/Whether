import styled from 'styled-components';

const TodoItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 5fr repeat(2, 1fr);
  gap: 10px;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #9c9c9c;
  background-color: ${({ weatherCategory }) => {
    switch (weatherCategory) {
      case 'good':
        return '#E8E687';
      case 'bad':
        return '#bdcaeb';
      default:
      case 'always':
        return '#becfbc';
    }
  }};

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-radius: 0 0 3px 3px;
    border: none;
  }
`;

export { TodoItem };
