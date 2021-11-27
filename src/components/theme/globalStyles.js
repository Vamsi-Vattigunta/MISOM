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
   .statesDropdown{
    background: ${({ theme }) => theme.navigationBackground};
    color: ${({ theme }) => theme.text};
    font-size : 17px;
   }
   .MuiTypography-body1{
    color: ${({ theme }) => theme.text}; 
   }
   .css-6hp17o-MuiList-root-MuiMenu-list{
    background: ${({ theme }) => theme.navigationBackground};
    color: ${({ theme }) => theme.text};
   }
   .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    background: ${({ theme }) => theme.navigationBackground};
    color: ${({ theme }) => theme.text};
  }
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    background: ${({ theme }) => theme.navigationBackground};
    color: ${({ theme }) => theme.text};
  }
  .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root{
    background: ${({ theme }) => theme.navigationBackground};
    color: ${({ theme }) => theme.text};
  }
  .css-1rwt2y5-MuiButtonBase-root-MuiButton-root{
    background: ${({ theme }) => theme.navigationBackground};
    color: ${({ theme }) => theme.text};
  }
  .MuiTypography-colorTextSecondary{
    color: ${({ theme }) => theme.text};
  }
  .css-1r5wa48-MuiList-root{
    background: ${({ theme }) => theme.navigationBackground};
    color: ${({ theme }) => theme.text};
    padding-top : 0px;
    padding-bottom : 0px;
  }
  .css-cvhtoe-MuiButtonBase-root-MuiListItemButton-root:hover{
    background: ${({ theme }) => theme.navigationBackground};
  }
  .css-16lloyr-MuiBottomNavigation-root{
    background: ${({ theme }) => theme.navigationBackground};
  }
  .css-imwso6-MuiBottomNavigationAction-label{
    color: ${({ theme }) => theme.text};
  }
  .css-1nl0624 {
    padding-bottom: 20px;
  }
  `
