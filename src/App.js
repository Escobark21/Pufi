import './App.scss';
import Header from './components/Header';
import SectionTarje from './components/SectionTarje';
import SectionRedes from './components/SectionRedes';
import FormInfo from './components/FormInfo';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
   
      <Header />
      <SectionTarje />
       <SectionRedes />
       <FormInfo />
      <Footer />
    </div>
  );
}

export default App;
