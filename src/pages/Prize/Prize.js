import React, {useEffect} from 'react'
import back from '../../Assets/back.jpg'
import gift1 from '../../Assets/gifts/1.jpg'
import gift2 from '../../Assets/gifts/2.jpg'
import gift3 from '../../Assets/gifts/3.jpg'
import gift4 from '../../Assets/gifts/4.jpg'
import gift5 from '../../Assets/gifts/5.jpg'
import gift6 from '../../Assets/gifts/6.jpg'
import gift7 from '../../Assets/gifts/7.jpg'
import gift8 from '../../Assets/gifts/8.jpg'
import gift9 from '../../Assets/gifts/9.jpg'
import gift10 from '../../Assets/gifts/10.jpg'
import Footer from '../Slot/component/Footer'

const Prize = (sessionId) => {

  useEffect(() => {

  }, [sessionId])

  const Gift = [
    {
      img: gift1
    },
    {
      img: gift2
    },
    {
      img: gift3
    },
    {
      img: gift4
    },
    {
      img: gift5
    },
    {
      img: gift6
    },
    {
      img: gift7
    },
    {
      img: gift8
    },
    {
      img: gift9
    },
    {
      img: gift10
    },
    
  ]

  return (
    <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='h-screen flex flex-col justify-between items-center'>
        <div className='overflow-y-scroll'>
          <div>
            <h1 className='text-white text-xl mt-2'>• СУПЕР 10 ШАГНАЛ •</h1>
          </div>
          <div className='h-[670px]'>
            {
              Gift.map((item, idx) => {
                return(
                  <div className='py-2'>
                  <div key={idx} style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='px-2 h-80 flex flex-col text-white justify-center items-center text-center w-[350px] rounded-xl'>
                    <p>{item.iphone}</p>
                    <p>{item.mac}</p>
                    <p>{item.pod}</p>
                    <p>{item.pad}</p>
                  </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Prize