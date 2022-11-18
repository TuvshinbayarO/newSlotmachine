import React from 'react'
import {FaInfoCircle, FaGamepad, FaClipboardList, FaGift, FaUserAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {

    const styles = `text-center flex justify-center items-center rounded-md`
    const styles2 = `bg-water-blue w-[102px] tablet:w-[125px] text-xs mt-2 h-8 tablet:h-10 text-center flex justify-center items-center rounded-md`

  return (
    <div className=' bg-white flex-col p-3 tablet:p-0 h-[100px] tablet:h-[85px] rounded-t-md w-full flex justify-center items-center'>
    <div className='flex items-center justify-around w-full space-x-4 px-2 text-xs'>
        <Link className={styles}  to={'/rule'}>
            <h1 className='text-4xl text-mobi-red'><FaInfoCircle /></h1>
        </Link>
        <Link className={styles}  to={'/leaderboards'}>
            <h1 className='text-4xl text-mobi-red'><FaClipboardList /></h1>
        </Link>
        <Link className={styles}  to={'/'}>
            <h1 className='text-5xl text-mobi-red'><FaGamepad /></h1>
        </Link>
        <Link to={'/prize'} className={styles}>
            <h1 className='text-4xl text-mobi-red'><FaGift /></h1>
        </Link>
        <Link to={'/detail'} className={styles}>
            <h1 className='text-4xl text-mobi-red'><FaUserAlt /></h1>
        </Link>
    </div>
</div>
  )
}

export default Footer