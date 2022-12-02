import * as React from "react";
import Slot from './pages/Slot/Slot';
import Rule from './pages/Rule/Rule';
import LeaderBoard from './pages/LeaderBoard/LeaderBoard';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import Prize from './pages/Prize/Prize';
import { useState } from 'react';
import Detail from './pages/Detail/Details';
import Edit from './pages/Detail/Component/Edit';
import axios from "axios";
import history from './history'
import './App.css'

function App() {
  const [data, setData] = useState({})
  const [sessionId, setSessionId] = useState('')
  const [rank, setRank] = useState({})
  const [familyData,setFamilyData] = useState({})

  const fetchData = () => {
    if(sessionId) { 

      axios.get("/api/customer", 
        {
          headers: {
          sessionId : localStorage.getItem("sessionId").length == 0 ? sessionId : localStorage.getItem("sessionId"),
        }
      }).then(res => {
        setData(res.data.result)
      }).catch(err => {
        console.log(err)
      })
    }
    axios.get(
      "api/myrank",
    {
      headers: {
        sessionId : localStorage.getItem("sessionId").length == 0 ? sessionId : localStorage.getItem("sessionId"),
      },
    }  
    ).then((res) => {
      setRank(res)
    }).catch(err => {
      console.log(err)
    })
  }

  const fetchFamily = () => {
    if(sessionId) { 
      axios.get("/api/family",     
      {
        headers: {
          sessionId : sessionId
        }
      }).then(res => {
        setData(res.data.result)
        
      }).catch(err => {
        console.log(err)
      })
    }
  }

  return (
    <div className="App">
      <Router history={history}>
        <Routes>
            <Route path='/' element={<Slot familyData={familyData} data={data} fetchData={fetchData} setFamilyData={setFamilyData} fetchFamily={fetchFamily} rank={rank} setRank={setRank} sessionId={sessionId} setData={setData} setSessionId={setSessionId}/>} />
            <Route path='/rule' element={<Rule sessionId={sessionId} />} />
            <Route path='/prize' element={<Prize sessionId={sessionId} />} />
            <Route path='/leaderboards' element={<LeaderBoard sessionId={sessionId} />} />
            <Route path='/detail' element={<Detail sessionId={sessionId} />} /> 
            <Route path='/edit' element={<Edit sessionId={sessionId} data={data} fetchData={fetchData}/>} /> 
          </Routes>            
      </Router>
    </div>
  );
}

export default App;
