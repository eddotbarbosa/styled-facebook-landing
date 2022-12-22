import {ThemeProvider} from "styled-components";
import {Home} from "./pages/home/home";

import {theme} from './styles/theme';

import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;
