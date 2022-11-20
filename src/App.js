
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
  const [params, setParams] = useState({s: `${params}`})
  const fetchData = () => {
    console.log("updated data: ", params);
    axios.get("api/family", 
      {
        //   params: {
        //   isdn: params.isdn ? params.isdn : '99111096'
        // },
          headers: {
          // token : params.t ? params.t : '61a78fa3180c3ee77c992c95d474351af121bc38',
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

  const fetchFamily = (data) => {
    axios.get("api/family",     
    {
      headers: {        
        // token : params.t ? params.t : '61a78fa3180c3ee77c992c95d474351af121bc38',
        sessionId : params.s ? params.s : "SID_99111096_18493513CF441"
        // members: members.join(','),
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
              <Route path='/leaderboards' element={<LeaderBoard />} />
              <Route path='/detail' element={<Detail />} /> 
              <Route path='/edit' element={<Edit data={data} fetchData={fetchData}/>} /> 
          </Routes>            
      </Router>
    </div>
  );
}

export default App;
