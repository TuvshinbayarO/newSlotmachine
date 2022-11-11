import React from 'react'
import bg from '../../Assets/Vector.png'
import Santa from '../../Assets/santa-claus.png'
import {FaCaretLeft} from 'react-icons/fa'

function Rule() {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className='container mx-auto bg-mobi-pinl h-screen w-full overflow-x-hidden overflow-y-scroll'>
        <div className='px-2'>
            <a href='/' className='text-white flex font-bold items-center'><FaCaretLeft /> Буцах</a>
        </div>
        <div className='flex justify-center items-center'>
            <h1 className='w-[65%] text-center text-white text-xl'>ХАМГИЙН ГОЁ БЭЛЭГ УРАМШУУЛЛЫН ДҮРЭМ</h1>
        </div>
        <div className='text-white mt-4 px-8 w-full text-sm'>
            <ul className='w-full text-left'>
                <li className='flex items-center justify-between'>
                    <h1 className='flex items-center justify-center'>1. Жаргалтай гэр бүлийн админ болоод гишүүд тоглох боломжтой</h1>
                </li>
                <li className='flex items-center justify-between mt-5'>
                    <h1>2. Таны өдрийн энхий дата худалдан авалтад  дагалдан 5 тикет бэлэглэнэ.</h1>
                </li>
                <li className='flex items-center justify-between mt-5'>
                    <h1>3. Түүгээрээ та тухайн 7 хоногт тоглох боломжтой.</h1>
                </li>
                <li className='flex items-center justify-between mt-5'>
                    <h1>4. Нэг удаа тоглоход Санта буух магадлал 30%, Олаф буух магадлал 40%, Гринч буух магадлал 30% байна</h1>
                </li>
                <li className='flex items-center justify-between mt-5'>
                    <h1>5. Гэр бүлийн гишүүн бүрийн тоогоор Санта буухмагадлал +1% нэмэгдэж, Гринч -1% буурна</h1>
                </li>
                <li className='flex items-center mt-5'>
                    <div className='bg-red-500 rounded-xl'>
                        <img alt='icons' className='w-12 h-12' src={Santa} />
                    </div>
                    <h1 className='pl-5'>Санта - 10 оноо</h1>
                </li>
                <li className='flex items-center mt-5'>
                    <div className='bg-red-500 rounded-xl'>
                        <img alt='icons' className='w-12 h-12' src={Santa} />
                    </div>
                    <h1 className='pl-5'>Олаф - 5 оноо</h1>
                </li>
                <li className='flex items-center mt-5'>
                    <div className='bg-red-500 rounded-xl'>
                        <img alt='icons' className='w-12 h-12' src={Santa} />
                    </div>
                    <h1 className='pl-5'>Гринч - 15 оноо</h1>
                </li>
            </ul>
            <h1 className='mt-5 text-left'>Жишээ нь: 4 гишүүнтэй гэр бүл Санта буух магадлал 34%Олаф буух магадлал 40% Гринч буух магадлал 26%</h1>
            
        </div>
    </div>
  )
}

export default Rule