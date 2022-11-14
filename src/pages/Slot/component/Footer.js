import React from 'react'

const Footer = () => {
  return (
    <div className='bg-mobi-red flex-col h-[110px] rounded-t-md w-full absolute top-[660px] flex justify-center items-center'>
    <div className='flex items-center w-full space-x-2 px-2 text-xs'>
        <a className=' bg-water-blue w-32 h-10 text-center flex justify-center items-center rounded-md' href='/rule'>
            <h1>Тоглоомын дүрэм</h1>
        </a>
        <a className=' bg-water-blue w-32 h-10 text-center flex justify-center items-center rounded-md' href='/prize'>
            <h1>Шагналын сан</h1>
        </a>
        <a className=' bg-water-blue w-32 h-10 text-center flex justify-center items-center rounded-md' href='/leaderboard'>
            <h1>Leader board</h1>
        </a>
        
    </div>
    <a className=' bg-water-blue w-[120px] text-xs mt-2 h-10 text-center flex justify-center items-center rounded-md' href='/'>
            <h1>Тоглоомруу буцах</h1>
        </a>
</div>
  )
}

export default Footer