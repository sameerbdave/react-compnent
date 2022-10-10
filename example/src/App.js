import './App.scss';
import Accordian from './components/Accordian';
import Accordin from './components/Accordin';
import FormMobileOtp from './components/FormMobileOtp';
import OfferCarosel from './components/OfferCarosel';
import Tabs from './components/Tabs';
import Offers from './components/Offers';

function App() {
  return (
    <>
      <h1 className="text-center mt-5">Carouse Component</h1>
      <OfferCarosel />
      <h1 className="text-center mt-5">Form components</h1>
      <hr/>
      <FormMobileOtp/>
      {/* <Accordian /> */}
      <h1 className="text-center mt-5">Tabs components</h1>
      <hr/>
      <Tabs />
      <h1 className="text-center mt-5">Tabs Accordian</h1>
      <hr/>
      <Accordin/>
      <h1 className="text-center mt-5">Card  components</h1>
      <hr/>
      <Offers/>
    </>
 
  );
}

export default App;
