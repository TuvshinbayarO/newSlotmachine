import React, {useEffect} from 'react'
import back from '../../Assets/back.jpg'
import d from '../../Assets/d.jpg'
import Footer from '../Slot/component/Footer'

const Prize = (sessionId) => {

  useEffect(() => {

  }, [sessionId])

  const Gift = [
    {
      iphone: 'Iphone 14 Pro max',
      mac: 'Macbook Pro',
      pad: 'Ipad Pro',
      pod: 'AirPods Pro'
    },
    {
      iphone: 'Iphone 14 Pro max',
      mac: 'Macbook Pro',
      pad: 'Ipad Pro',
      pod: 'AirPods Pro'
    },
    {
      iphone: 'Iphone 14 Pro max',
      mac: 'Macbook Pro',
      pad: 'Ipad Pro',
      pod: 'AirPods Pro'
    },
    {
      iphone: 'Iphone 14 Pro max',
      mac: 'Macbook Pro',
      pad: 'Ipad Pro',
      pod: 'AirPods Pro'
    },
    {
      iphone: 'Iphone 14 Pro max',
      mac: 'Macbook Pro',
      pad: 'Ipad Pro',
      pod: 'AirPods Pro'
    },
    {
      iphone: 'Iphone 14 Pro max',
      mac: 'Macbook Pro',
      pad: 'Ipad Pro',
      pod: 'AirPods Pro'
    },
    {
      iphone: 'Iphone 14 Pro max',
      mac: 'Macbook Pro',
      pad: 'Ipad Pro',
      pod: 'AirPods Pro'
    },
    {
      iphone: 'Iphone 14 Pro max',
      mac: 'Macbook Pro',
      pad: 'Ipad Pro',
      pod: 'AirPods Pro'
    },
    {
      iphone: 'Iphone 14 Pro max',
      mac: 'Macbook Pro',
      pad: 'Ipad Pro',
      pod: 'AirPods Pro'
    },
    {
      iphone: 'Iphone 14 Pro max',
      mac: 'Macbook Pro',
      pad: 'Ipad Pro',
      pod: 'AirPods Pro'
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
                  <div key={idx} style={{ backgroundImage: `url(${d})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='px-2 h-80 flex flex-col text-white justify-center items-center mt-2 text-center w-[350px] rounded-xl'>
                    <p>{item.iphone}</p>
                    <p>{item.mac}</p>
                    <p>{item.pod}</p>
                    <p>{item.pad}</p>
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