import styled from 'styled-components';
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
    small:() => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 24px;
    `
};

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
        outline: 3px solid ${defaultTheme.primaryColorDarker};
        outline-offset: 2px;
        background-color: ${defaultTheme.primaryColorDarker};
        color: ${defaultTheme.textColorInverted};
    }
    
    &:active {
        background-color: ${defaultTheme.primaryColorActive};
        border-color: ${defaultTheme.primaryColorActive};
        color: ${defaultTheme.textColor};
    }
`;

// Inherit all properties from parent Button
const PrimaryButton = styled(Button)`
// CSS
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: black;

    &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textOnDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${defaultTheme.primaryColorDarker};
    color: ${defaultTheme.primaryColorDarker}; 

    &:disabled {
        background: none;
        color: ${defaultTheme.disabled};
        border-color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
export const TertiaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${defaultTheme.primaryColorDarker}; 

    &:disabled {
        background: none;
        color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export default PrimaryButton;