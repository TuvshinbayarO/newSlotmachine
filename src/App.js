
import Slot from './pages/Slot/Slot';
import Rule from './pages/Rule/Rule';
import LeaderBoard from './pages/LeaderBoard/LeaderBoard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Prize from './pages/Prize/Prize';
import { useEffect, useState } from 'react';
import Detail from './pages/Detail/Details';
import Edit from './pages/Detail/Component/Edit';
import axios from 'axios';

function App() {
  const [data, setData] = useState({})
  // const [token, setToken] = useState('')

  // setToken={setToken}
  // token={token}

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    axios.get("customer", 
      {params: {
        isdn: '99111096'
      }},      
      {headers: {
        "sessionId" : "61a78fa3180c3ee77c992c95d474351af121bc38"
      }}
      ,)
      .then(res => {
        setData(res.data.result)
        fetchFamily(res.data.result.family.members);
      })
      .catch(err => {
        console.log("DJASKLJDLKSAJLKD")
        console.log(err)
      }
    )
  }

  const fetchFamily = (members) => {
    axios.get("customer", 
    {
      params: {
        isdn: '99111096',
        members: members.join(','),
        fnfId: 3
      }
    },      
    {
      headers: {
      "sessionId" : "61a78fa3180c3ee77c992c95d474351af121bc38"
      }
    }).then(res => {
      console.log('family result:', res.data.result)
    }).catch(err => {
      console.log(err)
    }
  )
  }

  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path='/' element={<Slot data={data}/>} />
              <Route path='/rule' element={<Rule />} />
              <Route path='/prize' element={<Prize />} />
              <Route path='/leaderboards' element={<LeaderBoard />} />
              <Route path='/detail' element={<Detail />} /> 
              <Route path='/edit' element={<Edit data={data} fetchData={fetchData}/>} /> 
          </Routes>            
      </Router>
    </div>
  );
}

export default App;
