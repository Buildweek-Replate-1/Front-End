import styled from "styled-components";

const SubmitStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    background-color: darkolivegreen;
    text-align: center;
    width: 18em;
  }
  button {
    background-color: olivedrab;
    color: red;
  }
  .inputs {
    display: flex;
    flex-direction: column;
  }
`;

export default SubmitStyle;
