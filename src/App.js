import './App.css';
import NavBar from './components/NavBar/navbar';
import UpperBody from './components/UpperBody/upperbody';
import LowerBody from './components/LowerBody/lowerbody';

function App() {
  return (
    <div className="App">
    {/* Routing karni hai Navbar ke links ki so dekhlena */}


      <NavBar />
       <UpperBody />
      {/* <Search /> */}
      <LowerBody />
      {/* <ServiceCards /> */}

      
    </div>
  );
}

export default App;
