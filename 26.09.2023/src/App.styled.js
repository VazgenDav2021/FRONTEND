import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 300px;
  background: red;
  padding: 25px;
  color: blue;
  font-size: 25px
`;

export const Line = styled.div`
  width: 100%;
  height:1px;
  background:grey;
`

export const Button = styled.button`
  background-color: ${props => props.isSayedHello ? "green" : "blue"};
  padding: 10px 20px;
  border-radius: 5px;
  cursor:pointer;

  &:hover{
    background-color: ${props => props.isSayedHello ? "orange" : "darkGreen"};
  }

  & .example {
    &:first-child{
      background:black;
      color: #fff;
    }
    background:red;
  }
`

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: grey;
  }

  button {
    border-radius: 20px;
  }

  * {
    font-size:30px
  }
`


// 1 Создать репонсивную навигацию с помощю styled component
// 2 При наведении курсора на элемент навигации менять цвет эелемента (с маленькой задеткой)
// 3 КОгда размер экрана меньше 900 пикселей все элементы навигации должны идти сверху вниз