import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const styles = `bg-water-blue w-32 h-8 tablet:h-10 text-center flex justify-center items-center rounded-md`
    const styles2 = `bg-water-blue w-[102px] tablet:w-[125px] text-xs mt-2 h-8 tablet:h-10 text-center flex justify-center items-center rounded-md`

  return (
    <div className='bg-mobi-red flex-col p-3 tablet:p-0 h-[100px] tablet:h-[110px] rounded-t-md w-full flex justify-center items-center'>
    <div className='flex items-center w-full space-x-4 px-2 text-xs'>
        <Link className={styles}  to={'/rule'}>
            <h1>Дүрэм</h1>
        </Link>
        <Link className={styles}  to={'/'}>
            <h1>Нүүр</h1>
        </Link>
        <Link className={styles}  to={'/leaderboards'}>
            <h1>Байр</h1>
        </Link>
    </div>
    <div className='flex items-center w-full space-x-4 px-2 text-xs'>
        <Link to={'/prize'} className={styles2}>
            <h1>Шагнал</h1>
        </Link>
        <Link to={'/detail'} className={styles2}>
            <h1>detail</h1>
        </Link>
    </div>
</div>
  )
}

export default Footer