import React, {useEffect, useState} from 'react'
import Santa from '../../Assets/santa-claus.png'
import {FaGift} from 'react-icons/fa'
import axios from 'axios'
import Footer from '../Slot/component/Footer'

const LeaderBoard = () => {

  const [leaderBoard, setLeaderBoard] = useState([])

  useEffect(() => {
    axios.get("leaderboard", 
          {headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "token" : "61a78fa3180c3ee77c992c95d474351af121bc38"
          }})
          .then(res => {
            console.log('res:',res)
            setLeaderBoard(res.data.response)
          })
          .catch(err => {
            console.log(err)
          })
  }, [])

  return (
    <div className='bg-mobi-pinl h-screen flex flex-col justify-between'>
        <div className='flex justify-center items-center'>
          <h1 className='text-white text-xl mt-2'>• ШИЛДЭГ 50 БАГ •</h1>
        </div>
        <div className=' overflow-y-scroll h-[640px] px-2'>
          {
            leaderBoard.map((items, idx) => {
              return(
                // ${items.colors}
                <div key={idx} className='bg-white h-24 w-full flex rounded-xl py-2 px-2 space-x-3 mt-2'>
                    <div className={`bg-red-500 flex flex-col justify-center items-center w-24 h-full rounded-lg text-white`}>
                      <h1 className='text-3xl'>{items.rank}</h1>
                      <p>Байр</p>
                    </div>
                    <div className='flex flex-col justify-center w-full'>
                      <div className='flex ml-2'>
                        <FaGift />
                        <h1 className='text-xs ml-2'>{items.bonus}</h1>
                      </div>
                      <div className='flex justify-between items-center text-xs mt-2'>
                        <div className='flex items-center'>
                          <img alt='icons' className='w-8 h-8 rounded-full' src={Santa} />
                          <div className=''>
                            <p>{items.name}</p>
                          </div>
                        </div>
                          <div className=''>
                            <h1>Нийлбэр оноо</h1>
                            <p>{items.point}</p>
                          </div>
                      </div>
                    </div>
                </div>
              )
            })
          }
        </div>
        {/* <div className='bg-red-500 w-full rounded-t-md p-5'>
            <div className='flex justify-between text-white'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-white text-xs'>Таны байр</h1>
                    <p className='text-white text-xl'>000009</p>
                </div>
                <div className='flex'>
                    <div className='flex text-xs'>
                        <div className='flex'>
                            <img alt='icons' className='w-8 h-8 rounded-full' src={Santa} />
                            <div className='text-left'>
                            <h1>Багийн гишүүн - 0</h1>
                            <p>King</p>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className='text-left'>
                    <h1 className='text-xs'>Нийлбэр оноо</h1>
                    <p>0’000</p>
                </div>
            </div>
        </div> */}
        <Footer />
    </div>
  )
}

export default LeaderBoard