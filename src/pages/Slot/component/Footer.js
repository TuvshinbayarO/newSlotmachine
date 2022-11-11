import React from 'react'

const Footer = () => {
  return (
    <div className='bg-water-blue h-24 rounded-t-md w-full absolute top-[716px] flex justify-center items-center'>
    <div className='flex justify-between items-center w-full space-x-2 px-2 text-white text-xs'>
        <a className='bg-red-500 w-32 h-9 text-center flex justify-center items-center rounded-lg' href='/rule'>
            <h1>Тоглоомын дүрэм</h1>
        </a>
        <a className='bg-red-500 w-32 h-9 text-center flex justify-center items-center rounded-lg' href='/prize'>
            <h1>Шагналын сан</h1>
        </a>
        <a className='bg-red-500 w-32 h-9 text-center flex justify-center items-center rounded-lg' href='/leaderboard'>
            <h1>Leader board</h1>
        </a>
    </div>
</div>
  )
}

export default Footer