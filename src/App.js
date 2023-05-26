import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SelectMenu from './pages/SelectMenu/SelectMenu';
import SelectDetail from './pages/SelectDetail/SelectDetail';
import WebcamPreview from './pages/WebcamPreview';

import SeniorMain from './pages/senior/Home';
import SeniorBurgerOrSide from './pages/senior/BurgerOrSide';
import SeniorBurgerType from './pages/senior/BugerType';
import SeniotSetSizeUp from './pages/senior/SetSizeUp';
import SeniorSideMenuSelct from './pages/senior/SideMenuSlect';

import { GlobalStyle } from './global';
import Payment from './pages/Payment/Payment';
import OrderSheet from './pages/OrderSheet/OrderSheet';

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
          <Route exact path="/gotoOrder" Component={OrderSheet} />
          <Route exact path="/makepayments" Component={Payment} />
          <Route exact path="/seniorHome" Component={SeniorMain} />
          <Route
            exact
            path="/seniorSelectBugerOrSide"
            Component={SeniorBurgerOrSide}
          />
          <Route
            exact
            path="/seniorSelectBugerType"
            Component={SeniorBurgerType}
          />
          <Route exact path="/seniorSetSizeUp" Component={SeniotSetSizeUp} />
          <Route
            exact
            path="/seniorSideMenuSlect"
            Component={SeniorSideMenuSelct}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
