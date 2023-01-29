import logo from './logo.svg';
import './App.scss';
import Homepage from './components/homepage/homepage';
import AboutNMIMS from './components/aboutNMIMS/aboutNMIMS';
import AboutTuring from './components/aboutTuring/aboutTuring';
function App() {
  return (
    <div className="App">
      <Homepage />
      <AboutNMIMS />
      <AboutTuring />
    </div>
  );
}

export default App;
