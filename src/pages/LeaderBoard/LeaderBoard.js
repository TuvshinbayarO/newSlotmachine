import React, {useEffect, useState} from 'react'
import back from '../../Assets/back.jpg'
import {FaGift} from 'react-icons/fa'
import axios from 'axios'
import Footer from '../Slot/component/Footer'
import { ProgressBar } from  'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
const LeaderBoard = ({prevSessionId}) => {

  const [leaderBoard, setLeaderBoard] = useState([])
  const [loading, setLoading] = useState(false);
  const sessionId = (prevSessionId)
  const navigate = useNavigate();

  const colors = [
    'bg-rank-yellow-1',
    'bg-rank-gray-2',
    'bg-rank-brown-3',
    'bg-rank-green-4',
    'bg-rank-blue-6',
    'bg-red-500'
  ]

  useEffect(() => {
    setLoading();
  }, [sessionId])

  useEffect(() => {
    if(sessionId){ 
    setLoading(true);
    axios.get("/api/leaderboard", 
      {headers: {
        sessionId : sessionId,
      }}
      )
      .then(res => {
        if(res.data.code === 'SESSION_EXPIRED'){
          return navigate("https://api.mobicom.mn?code=0");
        }
        setLeaderBoard(res.data.result.rank)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false);
      })
    }
    }, [sessionId])

  return (
    loading ? 
    <div className='flex justify-center items-center h-screen'>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor = '#F4442E'
        barColor = '#51E5FF'
      />
    </div> :
    <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className=' h-screen flex flex-col justify-between'>
        <div className='flex justify-center items-center'>
          <h1 className='text-white text-xl mt-2'>• ШИЛДЭГ 50 БАГ •</h1>
        </div>
        <div className=' overflow-y-scroll h-[640px] px-2'>
        {
          leaderBoard.map((items, idx) => {
            return(
              // ${items.colors}
              <div key={idx} className='bg-white h-24 w-full flex rounded-xl py-2 px-2 space-x-3 mt-2'>

                  <div className={`${colors && items.color} flex flex-col justify-center items-center w-24 h-full rounded-lg text-white`}>
                    <h1 className='text-3xl'>{items.rank}</h1>
                    <p>Байр</p>
                  </div>
                  <div className='flex flex-col justify-center w-full'>
                    <div className='flex items-center ml-2'>
                      {
                        idx < 10 &&
                        <FaGift className='text-mobi-red' />
                      }
                      <h1 className='text-base ml-2 font-bold'>{items.gift}</h1>
                    </div>
                    <div className='flex justify-between items-center text-xs mt-2'>
                      <div className='flex items-center'>
                      <img className='w-8 h-8 rounded-full' alt='icons' src={require(`../../Assets/Icons/${items.iconCode}.png`)} />
                        <div className='flex justify-center items-center ml-2'>
                          <p className='font-bold text-base'>{items.nameCode}</p>
                          <div className='h-4 bg-white'>
                          </div>
                        </div>
                      </div>
                        <div className=''>
                          <h1>Нийт оноо</h1>
                          <p className='text-base font-semibold'>{items.point}</p>
                        </div>
                    </div>
                  </div>
              </div>
            )
          })
        }
      </div>
        <Footer />
    </div>
  )
}

export default LeaderBoard