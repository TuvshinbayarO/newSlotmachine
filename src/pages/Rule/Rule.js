import React, {useEffect} from 'react'
import back from '../../Assets/back.jpg'
import bd from '../../Assets/goymod.png'
import Santa from '../../Assets/santa-claus.png'
import Footer from '../Slot/component/Footer'

function Rule(sessionId) {


  useEffect(() => {

}, [sessionId])

  return (
    <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='mx-auto h-screen flex flex-col justify-between w-full'>
        <div style={{ backgroundImage: `url(${bd})`, backgroundSize: '1500px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='overflow-y-scroll'>
        <div className='flex justify-center items-center pt-3'>
            <h1 className='w-[65%] text-center text-white text-xl'>ХАМГИЙН ГОЁ БЭЛЭГ УРАМШУУЛЛЫН ДҮРЭМ</h1>
        </div>
        <div className='text-white px-8 w-full text-sm pt-5'>
            <ul className='w-full text-left'>
                <li className='flex items-center justify-between'>
                    <h1 className='flex items-center justify-center'>1. Жаргалтай гэр бүлийн админ болоод гишүүд тоглох боломжтой</h1>
                </li>
                <li className='flex items-center justify-between mt-5'>
                    <h1>2. Өдрийн Эхний дата худалдан авалт бүрд 5 удаа тоглох эрх бэлэглэх бөгөөд тухайн 7 хоногтоо хүчинтэй байна.</h1>
                </li>
                <li className='flex items-center mt-5'>
                    <div className='bg-red-500 rounded-xl'>
                        <img alt='icons' className='w-12 h-12' src={Santa} />
                    </div>
                    <h1 className='pl-5'>Цаа буга: +17 оноо </h1>
                </li>
                <li className='flex items-center mt-5'>
                    <div className='bg-red-500 rounded-xl'>
                        <img alt='icons' className='w-12 h-12' src={Santa} />
                    </div>
                    <h1 className='pl-5'>Хонь: +7 оноо</h1>
                </li>
                <li className='flex items-center mt-5'>
                    <div className='bg-red-500 rounded-xl'>
                        <img alt='icons' className='w-12 h-12' src={Santa} />
                    </div>

                    <h1 className='pl-5'>Чоно: -9 оноо</h1>
                </li>
                <li className='flex flex-col items-start justify-start mt-5'>
                    <h1>4. Нэг удаа тоглоход</h1>
                    <p>Цаа буга буух магадлал - 30%</p>
                    <p>Хонь буух магадлал - 40%</p>
                    <p>Чоно буух магадлал - 30%</p>
                </li>
                <li className='flex items-center justify-between mt-5'>
                    <h1>5. Жаргалтай гэр бүл үйлчилгээд бүртгэлтэй гишүүн бүрийн тоогоор Цаа буга буух магадлал +1% нэмэгдэж, Чоно -1% буурна.</h1>
                </li>
            </ul>
            <h1 className='mt-5 text-left'>Жишээ нь: 4 гишүүнтэй гэр бүл Цаа буга буух магадлал 34% Хонь буух магадлал 40% Чоно буух магадлал 26%</h1>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Rule