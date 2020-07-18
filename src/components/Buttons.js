import styled from 'styled-components';
import { defaultTheme, typeScale } from "../utils";

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 20px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Work Sans", sans-serif;
    transition: background-color 0.2s linear, color 0.2s linear;

    &:hover {
        background-color: ${defaultTheme.primaryColorHover};
        color: ${defaultTheme.textColorOnPrimary};
    }

    &:focus {
        background-color: ${defaultTheme.primaryColorDarker};
        color: ${defaultTheme.textColorInverted};
    }
    
    &:active {
        background-color: ${defaultTheme.primaryColorActive};
        color: ${defaultTheme.textColor};
    }
    &:disabled {
        background-color: ${defaultTheme.primaryColorDisabled}
        color: ${defaultTheme.textColor}
    }



`;

// Inherit all properties from parent Button
const PrimaryButton = styled(Button)`
// CSS
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: black;
`;

export const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${defaultTheme.primaryColorDarker};
    color: ${defaultTheme.primaryColorDarker}; 
`
export const TertiaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${defaultTheme.primaryColorDarker}; 
`

export default PrimaryButton;