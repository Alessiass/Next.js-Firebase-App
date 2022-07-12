import styled from 'styled-components';

interface NavigationbarProps {
    setColor: string
}

export const Navigationbar = styled.nav<NavigationbarProps>`
background-color: ${props => props.setColor ? props.setColor : "brown"};
`;