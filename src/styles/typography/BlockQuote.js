import styled from 'styled-components';
import "@fontsource/montserrat"

export const Blockquote = styled.blockquote`
    font-family: ${props => props.theme.font.family};
    font-weight: 300;
    font-size: 2rem;
    quotes: "“" "”";

    &::before {
        content: open-quote;
        font-size: 4rem;
        line-height: 0.1em;
        margin-right: 0.25em;
        vertical-align: -0.4em;
    }

    &::after {
        display: block;
        width: auto;
        height: auto;
        content: "— ${props => props.quoteBy}";
        font-size: 1rem;
        text-transform: uppercase;
        line-height: 0.1em;
        text-align: right;
        margin-top: 0.6em;
        vertical-align: -0.4em;
    }
`