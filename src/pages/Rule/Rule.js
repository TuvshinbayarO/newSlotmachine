import React, {useEffect} from 'react'
import back from '../../Assets/back.jpg'
import bd from '../../Assets/goymod.png'
import Reindear from '../../Assets/Detail/REINDEER.png'
import Dog from '../../Assets/Detail/WOLF.png'
import Lamb from '../../Assets/Detail/LAMB.png'
import Footer from '../Slot/component/Footer'

function Rule(sessionId) {


  useEffect(() => {

}, [sessionId])

  return (
    <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='mx-auto h-screen flex flex-col justify-between w-full'>
        <div style={{ backgroundImage: `url(${bd})`, backgroundSize: '1500px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='overflow-y-scroll'>
        <div className='flex justify-center items-center pt-3'>
            <h1 className='w-[65%] text-center text-white text-xl'>ТОГЛООМЫН ДҮРЭМ</h1>
        </div>
        <div className='text-white px-8 w-full text-sm py-5'>
            <ul className='w-full text-left'>
                <li className='flex items-center justify-between'>
                    <h1 className='flex items-center justify-center text-justify'>WE үйлчилгээний админ болон гишүүд тоглох боломжтой. Дата худалдан авахад тоглоом тоглох 5 эрх бэлэглэх бөгөөд өдөрт НЭГ УДАА тус эрх дагалдана. Тоглох эрх тухайн 7 хоногтоо хүчинтэй байна.</h1>
                </li>
                <li className='flex items-center justify-between mt-5'>
                    <h1 className='flex items-center justify-center text-justify'>12-р сарын 05-ны өдрөөс 01-р сарын 01-ний өдрийг дуустал 4 долоо хоногийн турш үргэлжилнэ. Долоо хоног бүрийн Ням гаргийн 23:59:59 цагаар тасалбар болгон хамгийн их оноотой 10 багийг Супер шагналын эздээр шалгаруулна.</h1>
                </li>
                <li className='flex items-center mt-5'>
                    <div className='rounded-xl'>
                        <img alt='icons' className='w-12 h-12' src={Reindear} />
                    </div>
                    <h1 className='pl-5'>Цаа буга: +17 оноо </h1>
                </li>
                <li className='flex items-center mt-5'>
                    <div className='rounded-xl'>
                        <img alt='icons' className='w-12 h-12' src={Lamb} />
                    </div>
                    <h1 className='pl-5'>Хурга: +7 оноо</h1>
                </li>
                <li className='flex items-center mt-5'>
                    <div className='rounded-xl'>
                        <img alt='icons' className='w-12 h-12' src={Dog} />
                    </div>
                    <h1 className='pl-5'>Нохой: -9 оноо</h1>
                </li>
                <li className='flex flex-col items-start justify-start mt-5 text-justify'>
                    <h1>Нэг удаа тоглоход Цаа буга буух магадлал 30%, Хурга буух магадлал 50%, Нохой буух магадлал 20% байна.</h1>
                </li>
                <li className='flex items-center justify-between mt-5 text-justify'>
                    <h1>WE үйлчилгээнд бүртгэлтэй гишүүн бүрийн тоогоор Цаа буга буух магадлал +1% нэмэгдэж, Нохой -1% буурна.</h1>
                </li>
            </ul>
            <h1 className='mt-5 text-justify'>(Жишээ нь: 4 гишүүнтэй багийн Цаа буга  буух магадлал 34%, Хурга буух магадлал 50%, Нохой  буух магадлал 16% болно)</h1>
            <h1 className='mt-5 text-justify'>Оноо тэнцсэн тохиолдолд тэнцсэн мөчид түрүүлж тухайн оноонд хүрсэн баг дээгүүрт эрэмбэлэгдэнэ.</h1>
            <h1 className='mt-5 text-justify'>Тухайн долоо хоногт ялагч болсон баг дараа, дараагийн тоглолтод оролцохгүй тул давхардахгүй тоогоор нийт 40 баг шинэ оны супер бэлгүүдийн эзэн болно.</h1>
            
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Rule