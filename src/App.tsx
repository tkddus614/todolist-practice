import styled, { createGlobalStyle } from "styled-components";
import TodoTemplate from "./TodoTemplate";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <TodoTemplate />
            </Container>
        </>
    );
}
const Container = styled.div`
    background: white;
    width: 500px;
    height: 700px;
    position: relative;
    margin: 30px auto 0;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: #d4d4d4;
  }
`;
