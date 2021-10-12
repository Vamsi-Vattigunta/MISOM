import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  .MuiDrawer-paper {
    background: ${({ theme }) => theme.drawerBackground};
    color: ${({ theme }) => theme.text};
  }
  .MuiAppBar-root {
    background: ${({ theme }) => theme.navigationBackground};
    color: ${({ theme }) => theme.text};
  }
  .MuiCard-root {
    background: ${({ theme }) => theme.navigationBackground};
    color: ${({ theme }) => theme.text};
  }
  .css-i4bv87-MuiSvgIcon-root{
    color: ${({ theme }) => theme.text};
   }
   .MuiSvgIcon-root{
    color: ${({ theme }) => theme.text};
   }
   .MuiAccordion-root{
    background: ${({ theme }) => theme.navigationBackground};
    color: ${({ theme }) => theme.text};
   }
   .tribesClass{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
   }
  `
