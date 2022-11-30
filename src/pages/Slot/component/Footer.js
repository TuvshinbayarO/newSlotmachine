import React from 'react'

import { Link } from 'react-router-dom'
import Play from '../../../Assets/footer/play.png'
import rule from '../../../Assets/footer/rule.png'
import Star from '../../../Assets/footer/star.png'
import Profile from '../../../Assets/footer/profile.png'
import Prize from '../../../Assets/footer/prize.png'
import bg from '../../../Assets/footer/footerBg.png'

const Footer = () => {

    const styles = `text-center flex justify-center items-center rounded-md`
    const sessionId = localStorage.getItem("sessionId")

  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='flex-col p-3 tablet:p-0 h-[100px] tablet:h-[85px] rounded-t-md w-full flex justify-center items-center'>
    <div className='flex items-center justify-around w-full space-x-4 px-2 text-xs'>
        <Link className={styles}  to={'/rule'}>
            <div className='flex justify-center flex-col items-center space-y-2'><img className='w-8 h-8' src={rule} /><h1 className='text-white text-xs'>Дүрэм</h1></div>
        </Link>
        <Link className={styles}  to={'/leaderboards'}>
        <div className='flex justify-center flex-col items-center space-y-2'><img className='w-8 h-8' src={Star} /><h1 className='text-white text-xs'>Шилдэг баг</h1></div>
        </Link>
        <Link className={styles}  to={`/`}>
        <div className='flex justify-center flex-col items-center space-y-2'><img className='w-8 h-8' src={Play} /><h1 className='text-white text-xs'>Тоглох</h1></div>
        </Link>
        <Link to={'/prize'} className={styles}>
        <div className='flex justify-center flex-col items-center space-y-2'><img className='w-8 h-8' src={Prize} /><h1 className='text-white text-xs'>Шагнал</h1></div>
        </Link>
        <Link to={'/detail'} className={styles}>
        <div className='flex justify-center flex-col items-center space-y-2'><img className='w-8 h-8' src={Profile} /><h1 className='text-white text-xs'>Профайль</h1></div>
        </Link>
    </div>
</div>
  )
}

export default Footer