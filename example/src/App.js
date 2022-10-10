import './App.scss';
import Accordian from './components/Accordian';
import Accordin from './components/Accordin';
import FormMobileOtp from './components/FormMobileOtp';
import OfferCarosel from './components/OfferCarosel';
import Tabs from './components/Tabs';

function App() {
  return (
    <>
      <OfferCarosel />
      <FormMobileOtp/>
      {/* <Accordian /> */}
      <hr/>
      <Tabs />
      <hr/>
      <Accordin/>
      
    </>
 
  );
}

export default App;
