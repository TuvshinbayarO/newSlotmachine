
import Slot from './pages/Slot/Slot';
import Rule from './pages/Rule/Rule';
import LeaderBoard from './pages/LeaderBoard/LeaderBoard';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Prize from './pages/Prize/Prize';
import { useEffect, useState } from 'react';
import Detail from './pages/Detail/Details';
import Edit from './pages/Detail/Component/Edit';
import axios from 'axios';
import history from './history'

function App() {
  const [data, setData] = useState({})
  const [familyData, setFamilyData] = useState({})
  const [params, setParams] = useState({s: 'SID_99111096_18493C48B6034'})
  
  const fetchData = () => {
    console.log("updated data", params);
    axios.get("api/family", 
      {
          params: {
          sessionId : params.s 

        },
          headers: {
          sessionId : params.s 
        }
      }).then(res => {
        setData(res.data.result)
        fetchFamily(res.data.result);
      }).catch(err => {
        console.log(err)
      }
    )
  }

  const fetchFamily = () => {
    axios.get("api/family",     
    {
      headers: {        
        sessionId : params.s
      }
    }).then(res => {
      setFamilyData(res.data.result)
      // console.log('family result:', res.data.family)
    }).catch(err => {
      console.log(err)
    }
  )
  }

  return (
    <div className="App">
      <Router history={history}>
          <Routes>
              <Route path='/' element={<Slot data={data} familyData={familyData} fetchFamily={fetchFamily} fetchData={fetchData} setParams={setParams} params={params}/>} />
              <Route path='/rule' element={<Rule />} />
              <Route path='/prize' element={<Prize />} />
              <Route path='/leaderboards' element={<LeaderBoard params={params} />} />
              <Route path='/detail' element={<Detail params={params} />} /> 
              <Route path='/edit' element={<Edit params={params} data={data} fetchData={fetchData}/>} /> 
          </Routes>            
      </Router>
    </div>
  );
}

export default App;
