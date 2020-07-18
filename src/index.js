import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { SignUpModal } from './components';
import { GlobalStyle, darkTheme, defaultTheme } from "./utils"

const App = () => {
  
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme: defaultTheme} >
      <button 
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(true)}
        >
        Dark Theme
      </button>
      <button 
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(false)}
        >
        Default Theme
      </button>
      <div 
        style={{
          background: useDarkTheme ? defaultTheme.primaryColorDarker : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
      }}>
      <SignUpModal />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
