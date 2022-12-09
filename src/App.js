import {useEffect} from "react";
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
  const [familyData, setFamilyData] = useState([])

  localStorage.removeItem('sessionId')

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/customer", 
      {
        headers: {
        sessionId : sessionId,
      }
    })
    setData(res.data.result)
    } catch (e) {
      console.error(e)
    }
}



  const fetchFamily = () => {
    if(sessionId) { 
      axios.get("/api/family",     
      {
        headers: {
          sessionId : sessionId
        }
      }).then(res => {
        setFamilyData(res.data.result.detail)
      }).catch(err => {
        console.log(err)
      })
    }
  }

  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  useEffect(() => {
    if(sessionId && sessionId !== ''){
      fetchFamily();
      fetchData();
    }
  },[sessionId])

  return (
    <div className="App">
      <Router history={history}>
        <Routes>
            <Route path='/' element={<Slot familyData={familyData} data={data} sessionId={sessionId} setSessionId={setSessionId} 
              setFamilyData={setFamilyData}
              fetchData={fetchData}/>} />
            <Route path='/rule' element={<Rule sessionId={sessionId} />} />
            <Route path='/prize' element={<Prize sessionId={sessionId} />} />
            <Route path='/leaderboards' element={<LeaderBoard prevSessionId={sessionId} />} />
            <Route path='/detail' element={<Detail prevSessionId={sessionId} />} /> 
            <Route path='/edit' element={<Edit sessionId={sessionId} data={data} fetchData={fetchData}/>} /> 
          </Routes>            
      </Router>
    </div>
  );
}

export default App;

