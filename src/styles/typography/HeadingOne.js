import styled from 'styled-components';
import "@fontsource/montserrat"

export const HeadingOne = styled.h1`
    font-family: ${props => props.theme.font.family};
    font-size: 3rem;
    text-transform: lowercase;
    text-align: center;
`