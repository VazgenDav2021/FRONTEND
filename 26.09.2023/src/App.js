import { useState } from 'react';
import Component1 from './components/Component1/Component1'
import { Container, Line, Button, GlobalStyles } from './App.styled'


function App() {
  const [isSayedHello, setIsSayedHello] = useState(false)


  const changeState = () => setIsSayedHello(!isSayedHello);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Component1 />
        <Line />
        <Component1 />

      </Container>
      <Button isSayedHello={isSayedHello} onClick={changeState}>{isSayedHello ? "Hello World" : "No text"}
        <div className='example'>Y</div>
        <div className='example'>Y</div>
        <div className='example'>Y</div>
      </Button>
    </>

  );
}

export default App;
