import styled from 'styled-components';

const primaryColor = "#98A1F0";
const primary400 = "#202B8A";
// const secondaryColor = '#FFF5C7';

const Button = styled.button`
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 20px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Work Sans", sans-serif;
`;

// Inherit all properties from parent Button
const PrimaryButton = styled(Button)`
// CSS
    background-color: ${primaryColor};
    border: none;
    color: black;
`;

export const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${primary400};
    color: ${primary400}; 
`
export const TertiaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${primary400}; 
`

export default PrimaryButton;