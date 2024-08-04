import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0;
  }

  .semi-bold {
    font-weight: 600;
  }

  .regular {
    font-weight: 400;
  }
`;

export default GlobalStyle;
