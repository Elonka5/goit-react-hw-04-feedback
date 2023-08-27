import styled from 'styled-components';

export const StyledSection = styled.section`
  box-sizing: border-box;
  margin: 30px auto;
  padding: 15px;
  width: 600px;
  min-height: 180px;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  box-shadow: inset 0px 0px 84px 19px rgba(107, 221, 252, 1),
    0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  & h2 {
    font-size: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
  }

  & p {
    font-size: 18px;
  }
`;
