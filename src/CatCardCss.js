import styled from 'styled-components';
export const Button = styled.button`
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    font-size: 16px;
    margin: 16px;
    padding: 4px 16px;
    border: 2px solid ${(props) => props.background};
    border-radius: 3px; height: 100%; width: 100%; 
    &:hover {background: none;color: ${(props) => props.background};}
    `;