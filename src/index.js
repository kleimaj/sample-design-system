import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton, {
   SecondaryButton,
    TertiaryButton 
  } from './components/Buttons';
import { GlobalStyle } from "./utils"

const App = () => (
  <div>
    <PrimaryButton>Submit</PrimaryButton>
    <SecondaryButton>Submit</SecondaryButton>
    <TertiaryButton>Submit</TertiaryButton>
    <GlobalStyle />
  </div>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
