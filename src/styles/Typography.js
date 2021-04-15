import styled from 'styled-components';
import "@fontsource/roboto"

export const Typography = styled.div`
    font-family: ${props => props.theme.font.alt.family};
    font-weight: ${props => props.fontWeight || props.theme.font.weight};
    color: ${props => props.fontColor || props.theme.font.color};
    font-style: ${props => props.fontStyle || 'normal'};
`