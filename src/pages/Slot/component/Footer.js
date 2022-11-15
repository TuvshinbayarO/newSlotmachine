import React from 'react'

const Footer = () => {
  return (
    <div className='bg-mobi-red flex-col p-3 tablet:p-0 h-[100px] tablet:h-[110px] rounded-t-md w-full flex justify-center items-center'>
    <div className='flex items-center w-full space-x-4 px-2 text-xs'>
        <a className=' bg-water-blue w-32 h-8 tablet:h-10 text-center flex justify-center items-center rounded-md' href='/rule'>
            <h1>Дүрэм</h1>
        </a>
        <a className=' bg-water-blue w-32 h-8 tablet:h-10 text-center flex justify-center items-center rounded-md' href='/'>
            <h1>Нүүр</h1>
        </a>
        <a className=' bg-water-blue w-32 h-8 tablet:h-10 text-center flex justify-center items-center rounded-md' href='/leaderboard'>
            <h1>Байр</h1>
        </a>
        
    </div>
    <a className=' bg-water-blue w-[102px] tablet:w-[125px] text-xs mt-2 h-8 tablet:h-10 text-center flex justify-center items-center rounded-md' href='/prize'>
            <h1>Шагнал</h1>
        </a>
</div>
  )
}

export default Footer