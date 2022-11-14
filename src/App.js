
import Slot from './pages/Slot/Slot';
import Rule from './pages/Rule/Rule';
import LeaderBoard from './pages/LeaderBoard/LeaderBoard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Prize from './pages/Prize/Prize';

function App() {
  return (
    <div className="App">
      
      <Router>
          <Routes>
              <Route path='/' element={<Slot />} />
              <Route path='/rule' element={<Rule />} />
              <Route path='/prize' element={<Prize />} />
              <Route path='/leaderboard' element={<LeaderBoard />} />
          </Routes>            
      </Router>
    </div>
  );
}

export default App;
