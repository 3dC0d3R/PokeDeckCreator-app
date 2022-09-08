import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Builders from './components/Builds';
import Build from './components/Build'
import Edit from './components/EditBuild'


function App() {
  
  return (
    <div className="App">
      <h2>PokeDeck Builder</h2>
      <Router>
        <Routes>
          <Route path='/' element={<Builders />}/>
          <Route path='/:id' element={<Build />}/>
          <Route path='/:id/edit' element={<Edit />}/>
        </Routes>
        <nav><Link to='/' >Home</Link></nav>
      </Router>
    </div>
  );
}

export default App;