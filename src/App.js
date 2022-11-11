
import Slot from './pages/Slot/Slot';
import Rule from './pages/Rule/Rule';
import LeaderBoard from './pages/LeaderBoard/LeaderBoard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
          <Routes>
              <Route path='/' element={<Slot />} />
              <Route path='/rule' element={<Rule />} />
              <Route path='/leaderboard' element={<LeaderBoard />} />
          </Routes>            
      </Router>
    </div>
  );
}

export default App;
