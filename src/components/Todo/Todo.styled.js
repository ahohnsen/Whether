import styled from "styled-components";

const TodoItem = styled.li`
  display: grid;
  grid-template-columns: 5% 85% 5% 5%;
  align-items: center;
  padding: 8px;
  box-shadow: 2px 2px 5px 1px rgba(150, 138, 144, 0.2);
  background-color: ${({ weatherCategory }) => {
    switch (weatherCategory) {
      case "good":
        return "mediumseagreen";
      case "bad":
        return "indianred";
      default:
      case "always":
        return "khaki";
    }
  }};
`;

export { TodoItem };
