import * as React from "react";
import Slot from './pages/Slot/Slot';
import Rule from './pages/Rule/Rule';
import LeaderBoard from './pages/LeaderBoard/LeaderBoard';
import { BrowserRouter as Router, Route, Routes, useSearchParams, useLocation} from 'react-router-dom';
import Prize from './pages/Prize/Prize';
import { useEffect, useState } from 'react';
import Detail from './pages/Detail/Details';
import Edit from './pages/Detail/Component/Edit';
import axios from 'axios';
import history from './history'

function App() {
  const [data, setData] = useState({})
  const [familyData, setFamilyData] = useState({})
  const [params, setParams] = useState({s: ""})
  const [sessionId, setSessionId] = useState({s:localStorage.getItem('sessionId')})
  useEffect(() => {
    setSessionId({s:localStorage.getItem('sessionId')})
  
  }, [localStorage.getItem('sessionId')])
  
  const fetchData = () => {
    
    axios.get("api/family", 
      {
          params: {
          sessionId : sessionId.s 

        },
          headers: {
          sessionId : sessionId.s 
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
        sessionId : sessionId.s
      }
    }).then(res => {
      console.log('first', res)
      setFamilyData(res.data.result)
      
    }).catch(err => {
      console.log(err)
    }
  )
  }

  return (
    <div className="App">
      <Router history={history}>
          <Routes>
              <Route path='/' element={<Slot data={data} familyData={familyData} fetchFamily={fetchFamily} fetchData={fetchData} setParams={setParams} params={sessionId}/>} />
              <Route path='/rule' element={<Rule />} />
              <Route path='/prize' element={<Prize />} />
              <Route path='/leaderboards' element={<LeaderBoard params={sessionId} />} />
              <Route path='/detail' element={<Detail params={sessionId} />} /> 
              <Route path='/edit' element={<Edit params={sessionId} data={data} fetchData={fetchData}/>} /> 
          </Routes>            
      </Router>
    </div>
  );
}

export default App;
