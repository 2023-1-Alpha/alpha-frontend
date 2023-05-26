import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SelectMenu from './pages/SelectMenu/SelectMenu';
import SelectDetail from './pages/SelectDetail/SelectDetail';
import WebcamPreview from './pages/WebcamPreview';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import SeniorMain from './pages/senior/Home';
import SeniorPayment from './pages/senior/Payment';
import SeniorBurgerOrSide from './pages/senior/BurgerOrSide';
import SeniorBurgerType from './pages/senior/BugerType';
import SeniotSetSizeUp from './pages/senior/SetSizeUp';
import SeniorSideMenuSelect from './pages/senior/SideMenuSelect';
import SelectBurger from './pages/senior/SelectBurger';
import SelectSide from './pages/senior/SelectSide';
import SelectDessert from './pages/senior/SelectDessert';

import { GlobalStyle } from './global';
import Payment from './pages/Payment/Payment';
import OrderSheet from './pages/OrderSheet/OrderSheet';
import SeniorSetOrNot from './pages/senior/SetOrNot';
import SelectDrink from './pages/senior/SelectDrink';
import CompletePayment from './pages/CompletePayment';

const Container = styled.div`
  max-width: 545px;
  margin: 0 auto;
  height: calc(100vh - 6px);
  border: 3px solid #f1f1f5;
`;

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Container>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/selectMenu" Component={SelectMenu} />
            <Route exact path="/selectDetail" Component={SelectDetail} />
            <Route exact path="/gotoOrder" Component={OrderSheet} />
            <Route exact path="/makePayments" Component={Payment} />
            <Route exact path="/completePayments" Component={CompletePayment} />

            <Route exact path="/seniorHome" Component={SeniorMain} />
            <Route exact path="/seniorMakePayments" Component={SeniorPayment} />
            <Route path="/seniorSelectBurger" Component={SelectBurger} />
            <Route path="/seniorSelectDrink" Component={SelectDrink} />
            <Route
              exact
              path="/seniorSelectBugerOrSide"
              Component={SeniorBurgerOrSide}
            />
            <Route
              exact
              path="/seniorSelectSetOrNot"
              Component={SeniorSetOrNot}
            />

            <Route
              exact
              path="/seniorSelectBurgerType"
              Component={SeniorBurgerType}
            />
            <Route exact path="/seniorSetSizeUp" Component={SeniotSetSizeUp} />
            <Route
              exact
              path="/seniorSideMenuSelect"
              Component={SeniorSideMenuSelect}
            />
            <Route exact path="/seniorSelectSide" Component={SelectSide} />
            <Route
              exact
              path="/seniorSelectDessert"
              Component={SelectDessert}
            />
            <Route exact path="/WebcamPreview" Component={WebcamPreview} />
          </Routes>
        </Container>
      </RecoilRoot>
    </>
  );
}

export default App;
