import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/globalStyles";
import { lightTheme, darkTheme } from "./theme/Themes"
import Navigation from './navigation/navigation';
import '../styles/App.css';

function MISOMApp() {

  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App" >
          <Navigation themeToggler = {themeToggler}/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default MISOMApp;
