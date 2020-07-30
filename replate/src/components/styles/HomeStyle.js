import styled from "styled-components";

const SighStyle = styled.div`
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
  // align-items: flex-end;
  // //   align-items: center;

  .header {
    display: flex;
    justify-content: space-between;
    background-color: #2f323a;
    color: #eacea4;
  }

  .header div {
    margin: 0 0 0 40px;
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
  }
  button {
    background-color: olivedrab;
    color: red;
    width: 15em;
  }
`;

export default SighStyle;
