// import './App.css';
import DedicatedSection from './Components/DedicatedSection/DedicatedSection';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import PastLaunches from './Components/PastLaunches/PastLaunches';


function App() {
  return (
    <div className="App">
      {/* <Nabvar></Nabvar> */}
      <Header></Header>
      <DedicatedSection></DedicatedSection>
      <PastLaunches></PastLaunches>
      <Footer></Footer>
    </div>
  );
}

export default App;
