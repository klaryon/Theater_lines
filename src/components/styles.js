import styled from "styled-components";
import Colors from "../theme/Colors";

export const StyledLines = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.beige};
  color: ${Colors.leaf};
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  color: ${Colors.leaf};
  background-color: ${Colors.beige};
  font-weight: bold;
  width: 20rem;
  height: 7rem;
  border: none;
  border-radius: 0.5rem;
  margin: 2rem 0rem 2rem 2rem;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${Colors.leaf};
  }

  &:hover {
    background-color: rgba(${Colors.leafRgb}, 0.1);
  }
`;
