import React from "react";
import Counter from "../counter";
import SvgSprite from "../svgSprite";
import styled from "styled-components";

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    background: linear-gradient(180deg, #0837B0 0%, #021E66 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const App = () => {
    return (
        <AppContainer>
            <SvgSprite/>
            <Counter/>
        </AppContainer>
    )
}

export default App;