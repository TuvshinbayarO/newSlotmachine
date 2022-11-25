import React, {useEffect, useState, useRef} from 'react'
import back from '../../Assets/back.jpg'
import {FaCalendarAlt, FaPhoneAlt, FaEdit} from 'react-icons/fa'
import axios from 'axios'
import Footer from '../Slot/component/Footer'
import { Link, useNavigate } from 'react-router-dom'
import moment from 'moment/moment'
import { ThreeDots } from 'react-loader-spinner'
import { ProgressBar } from  'react-loader-spinner'
import footerBg from '../../Assets/footer/footerBg.png'

const Detail = ({sessionId}) => {
  const navigate = useNavigate();  
  const iconNames = ['SANTA', 'GRINCH', 'SNOWMAN']
  const iconData = {
    SNOWMAN: 'snowman',
    GRINCH: 'grinch',
    SANTA: 'santa',
}
  const [log, setLog] = useState([])
  const [firstLoading, setFirstLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // const listInnerRef = useRef();
  // var limit = 10 ;

  // const onScroll = () => {
  //   if (listInnerRef.current) {
  //     const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
  //     if (scrollTop + clientHeight === scrollHeight) {
  //       setLoading(true);
  //       limit += 5;
  //       fetchData();
  //     }
  //   }
  // };

  useEffect(() => {
    setFirstLoading(true)
    fetchData();
    setFirstLoading(false)
  }, [sessionId])
  
  const fetchData = () => {
    axios.get("/api/log", 
    {headers: {
            sessionId : localStorage.getItem("sessionId").length == 0 ? sessionId : localStorage.getItem("sessionId"),
          }},
          )
          .then(res => {
            if(res.data.code === 'SESSION_EXPIRED' && null){
              return navigate("https://api.mobicom.mn?code=0");
            } 
            setLog(res.data.result)
          })
          .catch(err => {
            console.log(err)
          }).finally(() => {
            // setLoading(false);
          })
  }

  return (
    loading ? 
    <div className='flex justify-center items-center h-screen'>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor = '#F4442E'
        barColor = '#51E5FF'
      />
    </div> :
    !log ? 
    <div className="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
    <div className="flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
          <span className="sr-only">Уучлаарай таны нэвтрэх хугацаа дууссан байна!</span>404
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">Нүүр хуудас руу буцан уу!</p>
        {/* <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p> */}
        {/* <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</a> */}
      </div>
    </div>
  </div> :
    <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className=' h-screen flex flex-col justify-between'>
        <div className='flex justify-end px-2 pt-2'>
          <div style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='h-14 w-14 flex justify-center items-center rounded-md'>
            <Link to={"/edit"}><p className='text-white text-xl mt-2'><FaEdit /></p></Link>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='text-white text-xl mt-2'>• Тоглоомын түүх •</h1>
          
        </div>
        {/* onScroll={() => onScroll()} ref={listInnerRef} */}
        <div className=' overflow-y-scroll h-[640px] px-2 py-2'>
          {
            log.map((items, idx) => {
              return(
                // ${items.colors}
                <div key={idx} style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='h-24 shadow-xl text-white w-full flex rounded-xl py-2 px-2 space-x-3 mt-2'>
                    <div className='flex flex-col justify-center w-full'>
                      <div className='flex justify-between ml-2'>
                        <div className='flex justify-center items-center'>
                          <FaCalendarAlt className='text-white' />
                          <h1 className='text-xs ml-2'>{moment(items.date).format('YYYY/MM/DD, HH:mm:ss')}</h1>
                        </div>
                        <div className=''>
                            <h1 className='text-xs'>Авсан оноо</h1>
                            <p className='text-base font-bold'>{items.point}</p>
                          </div>
                      </div>
                      <div className='flex justify-between items-center text-xs mt-2'>
                        <div className='flex items-center'>
                          <div className='flex ml-2 space-x-3 justify-center items-center'>
                            <FaPhoneAlt className='text-white' />
                            <p>{items.isdn}</p>
                          </div>
                          
                          <div className=''>
                            <p>{items.familyName}</p>
                          </div>
                        </div>
                        <div className=''>
                          <div className='flex flex-row space-x-2 items-center'>{items.game.map((names, idx) => {
                            return(
                              <div className='bg-white rounded-md' key={idx}>
                                <img className='w-8 h-8 rounded-full' alt='icons' src={require(`../../Assets/Detail/${iconData[names.name] || 'DEFAULT'}.png`)} />
                              </div>
                            )
                          })}</div>
                        </div>
                      </div>
                    </div>
                </div>
              )
            })
          }
        {
            loading &&
            <div className='flex justify-center items-center'>
                <ThreeDots 
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#FF0000" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        }
        </div>
        <Footer />
    </div>
  )
}

export default Detail