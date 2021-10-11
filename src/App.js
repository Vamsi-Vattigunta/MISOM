import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import Navigation from './components/navigation/navigation';
import './styles/App.css';

function App() {

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

export default App;
