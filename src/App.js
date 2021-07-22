// import './App.css';
import DedicatedSection from './Components/DedicatedSection/DedicatedSection';
import Footer from './Components/Footer/Footer';
import Footer2 from './Components/Footer/Footer2';

import Header from './Components/Header/Header';
import LoadMission from './Components/LoadMission/LoadMission';
import PastLaunches from './Components/PastLaunches/PastLaunches';


function App() {
  return (
    <div className="App">
      {/* <Nabvar></Nabvar> */}
      <Header></Header>
      <DedicatedSection></DedicatedSection>
      <PastLaunches></PastLaunches>
      {/* <LoadMission></LoadMission> */}
      <Footer></Footer>
      <Footer2></Footer2>
    </div>
  );
}

export default App;
