import styled from "styled-components";

const SighStyle = styled.div`
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
  // align-items: flex-end;
  // //   align-items: center;
  .header {
    background-color: #2f323a;
    color: #eacea4;
  }
  .header div {
    display: flex;
  }
  section {
    display: flex;
  }
  .main {
    width: 75%;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 20em;
  }
  button {
    background-color: olivedrab;
    color: red;
    width: 15em;
  }
  // h3 {
  //   background-color: darkolivegreen;
  //   text-align: center;
  //   width: 18em;
  // }
  // .inputs {
  //   display: flex;
  //   flex-direction: column;
  // }
`;

export default SighStyle;
