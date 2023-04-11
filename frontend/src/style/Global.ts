import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --brand1: e11138#;
    --brand2: #f3123c;
    --brand3: #B0A6F0;
    --brand4: #ecedf2;

    --grey0: #42414d;
    --grey1: #4d4c59;
    --grey2: #2e2d37;
    --grey3: #868E96;
    --grey4: #ADB5BD;
    --grey5: #CED4DA;
    --grey6: #DEE2E6;
    --grey7: #E9ECEF;
    --grey8: #F1F3F5;
    --grey9: #F8F9FA;
    --grey10: #FDFDFD;

    --whiteFixed: #FFFFFF;

    --alert1: #CD2B31;
    --alert2: #FDD8D8;
    --alert3: #FFE5E5;

    --sucess1: #18794E;
    --sucess2: #CCEBD7;
    --sucess3: #DDF3E4;

    --random1: #E34D8C;
    --random2: #C04277;
    --random3: #7D2A4D;
    --random4: #7000FF;
    --random5: #6200E3;
    --random6: #36007D;
    --random7: #349974;
    --random8: #2A7D5F;
    --random9: #153D2E;
    --random10: #6100FF;
    --random11: #5700E3;
    --random12: #30007D;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, html {
    height: 100vh;
    font-family: "Lexend", sans-serif;
    font-style: normal;
  }

  button {
    cursor: pointer;
    border-radius: 0.25rem;
  }

  *::-webkit-scrollbar {
    width: .625rem;
    height: .625rem;
  }

  *::-webkit-scrollbar-track {
    background: var(--grey8);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--brand2);
    border-radius: 10rem;
    border: .1875rem solid var(--grey8);
  }


  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`;
