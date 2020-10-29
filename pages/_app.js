import "../styles/globals.scss";
import { ThemeProvider } from "emotion-theming";
import {lightTheme, darkTheme} from "../styles/themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
