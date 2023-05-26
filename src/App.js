import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SelectMenu from './pages/SelectMenu/SelectMenu';
import SelectDetail from './pages/SelectDetail/SelectDetail';

import { GlobalStyle } from './global';
import Payment from './pages/Payment/Payment';

const Container = styled.div`
  max-width: 545px;
  margin: 0 auto;
  height: calc(100vh - 6px);
  border: 3px solid #f1f1f5;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/selectMenu" Component={SelectMenu} />
          <Route exact path="/selectDetail" Component={SelectDetail} />
          <Route exact path="/makepayments" Component={Payment} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
