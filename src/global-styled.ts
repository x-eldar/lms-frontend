import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #root {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    main {
        flex-grow: 1;
        padding-inline: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;
