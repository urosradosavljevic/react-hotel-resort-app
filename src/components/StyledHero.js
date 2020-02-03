import styled from "styled-components";

export const StyledHero = styled.header`
  min-height: calc(75vh);
  background: url(${props => props.img});
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
  margin-bottom: 5em;
  position: relative;

  @media (max-width: 1250px) {
    margin-bottom:3em;
  }
`;
