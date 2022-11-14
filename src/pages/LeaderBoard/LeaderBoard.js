import React, {useEffect, useState} from 'react'
import Santa from '../../Assets/santa-claus.png'
import {FaGift} from 'react-icons/fa'
import axios from 'axios'

const LeaderBoard = () => {

  const [leaderBoard, setLeaderBoard] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await axios({
      method: 'get',
      url: 'http://172.22.2.30:8080/family-slot-game/rest/game/leaderboard',
      withCredentials: false
    })
  }

  const Datas = [
    {
      id: 1,
      rank: 1,
      title: 'Apple set',
      icon: Santa,
      members: 5,
      name: 'King',
      score: '500',
      colors: `bg-red-500`
    },
    {
      id: 2,
      rank: 2,
      title: 'Apple set',
      icon: Santa,
      members: 5,
      name: 'King',
      score: '500',
      colors: `bg-gray-500`
    },
    {
      id: 3,
      rank: 3,
      title: 'Apple set',
      icon: Santa,
      members: 5,
      name: 'King',
      score: '500',
      colors: `bg-orange-500`
    },
    {
      id: 4,
      rank: 4,
      title: 'Apple set',
      icon: Santa,
      members: 5,
      name: 'King',
      score: '500',
      colors: `bg-yellow-500`
    },
    {
      id: 5,
      rank: 5,
      title: 'Apple set',
      icon: Santa,
      members: 5,
      name: 'King',
      score: '500',
      colors: `bg-blue-500`
    },
    {
      id: 6,
      rank: 6,
      title: 'Apple set',
      icon: Santa,
      members: 5,
      name: 'King',
      score: '500',
      colors: `bg-green-500`
    },
    {
      id: 7,
      rank: 7,
      title: 'Apple set',
      icon: Santa,
      members: 5,
      name: 'King',
      score: '500',
      colors: `bg-lime-500`
    },
    {
      id: 8,
      rank: 8,
      title: 'Apple set',
      icon: Santa,
      members: 5,
      name: 'King',
      score: '500',
      colors: `bg-cyan-500`
    },
    {
        id: 9,
        rank: 9,
        title: 'Apple set',
        icon: Santa,
        members: 5,
        name: 'King',
        score: '500',
        colors: `bg-cyan-500`
      },
      {
        id: 8,
        rank: 8,
        title: 'Apple set',
        icon: Santa,
        members: 5,
        name: 'King',
        score: '500',
        colors: `bg-cyan-500`
      },
      {
        id: 10,
        rank: 10,
        title: 'Apple set',
        icon: Santa,
        members: 5,
        name: 'King',
        score: '500',
        colors: `bg-cyan-500`
      },
      {
        id: 11,
        rank: 11,
        title: 'Apple set',
        icon: Santa,
        members: 5,
        name: 'King',
        score: '500',
        colors: `bg-cyan-500`
      },

  ]

  return (
    <div className='bg-mobi-pinl h-screen'>
        <div className='flex justify-center items-center'>
          <h1 className='text-white text-xl pt-5'>• ШИЛДЭГ 50 БАГ •</h1>
        </div>
        <div className='flex flex-col justify-center items-center overflow-y-scroll pt-72 h-[90%]'>
          {
            Datas.map((items, idx) => {
              return(
                <div key={idx} className='bg-white h-24 w-full flex rounded-xl py-2 px-2 space-x-3 mt-2'>
                    <div className={`${items.colors} flex flex-col justify-center items-center w-24 h-full rounded-lg text-white`}>
                      <h1 className='text-3xl'>{items.rank}</h1>
                      <p>Байр</p>
                    </div>
                    <div className='flex flex-col justify-center w-full'>
                      <div className='flex ml-2'>
                        <FaGift />
                        <h1 className='text-xs ml-2'>{items.title}</h1>
                      </div>
                      <div className='flex justify-between items-center text-xs mt-2'>
                        <div className='flex'>
                          <img alt='icons' className='w-8 h-8 rounded-full' src={items.icon} />
                          <div className=''>
                            <h1>Багийн гишүүн - {items.members}</h1>
                            <p>{items.name}</p>
                          </div>
                        </div>
                          <div className=''>
                            <h1>Нийлбэр оноо</h1>
                            <p>{items.score}</p>
                          </div>
                      </div>
                    </div>
                </div>
              )
            })
          }
        </div>
        <div className='bg-red-500 w-full rounded-t-md p-5'>
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
        </div>
    </div>
  )
}

export default LeaderBoard