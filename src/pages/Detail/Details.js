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

const LIMIT = 10;

const Detail = ({prevSessionId}) => {
  const navigate = useNavigate();  
  // const iconNames = ['SANTA', 'GRINCH', 'SNOWMAN']
  const iconData = {
    REINDEER: 'REINDEER',
    WOLF: 'WOLF',
    LAMB: 'LAMB',
}
  const [log, setLog] = useState([])
  const [firstLoading, setFirstLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const sessionId = (prevSessionId)
  const [offset, setOffset] = useState(0)

  const listInnerRef = useRef();


  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setOffset(offset + LIMIT)
        fetchData();
      }
    }
  };

  useEffect(() => {
    if(sessionId !== ''){
      setFirstLoading(true)
      fetchData();
      setFirstLoading(false)
    }
  }, [sessionId])
  
  const fetchData = () => {
    setLoading(true)
    axios.get('/api/log', 
    {headers: {
            sessionId : prevSessionId,
          },
            params: {
              offset: offset,
              limit: LIMIT,
              isAsc: false
            }
        },
          )
          .then(res => {
            if(res.data.code === 'SESSION_EXPIRED'){
              return navigate("https://api.mobicom.mn?code=0");
            } 
            if(res.data.code === 'SUCCESS' || res.data.result === null){
              setLog(log.concat(res.data.result))  
            }
          })
          .catch(err => {
            console.log(err)
          }).finally(() => {
            setLoading(true)
          })
  }

  return (
    
    <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className=' h-screen flex flex-col justify-between'>
        <div className='flex justify-end px-2 pt-2'>
            <Link to={"/edit"}><p className='text-white text-2xl mt-2'><FaEdit /></p></Link>          
        </div>
          <div className='flex justify-center items-center'>
            <h1 className='text-white text-xl mt-2'>• Тоглоомын түүх •</h1>
          </div>
          {loading ? 
          <div className=' overflow-y-scroll h-[640px] px-2 py-2' onScroll={() => onScroll()} ref={listInnerRef}>
          {
            log?.map((items, idx) => {
              return(
                // ${items.colors}
                <div key={idx} style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='h-24 shadow-xl text-white w-full flex rounded-xl py-2 px-2 space-x-3 mt-2'>
                    <div className='flex flex-col justify-center w-full'>
                      <div className='flex justify-between ml-2'>
                        <div className='flex justify-center items-center'>
                          <FaCalendarAlt className='text-white' />
                          <h1 className='text-xs ml-2'>{moment(items?.date).format('YYYY/MM/DD, HH:mm:ss')}</h1>
                        </div>
                        <div className=''>
                            <h1 className='text-xs'>Авсан оноо</h1>
                            <p className='text-base font-bold'>{items?.point}</p>
                          </div>
                      </div>
                      <div className='flex justify-between items-center text-xs mt-2'>
                        <div className='flex items-center'>
                          <div className='flex ml-2 space-x-3 justify-center items-center'>
                            <FaPhoneAlt className='text-white' />
                            <p>{items?.isdn}</p>
                          </div>
                          
                          <div className=''>
                            <p>{items?.familyName}</p>
                          </div>
                        </div>
                        <div className=''>
                          <div className='flex flex-row space-x-2 items-center'>{items?.game?.map((names, idxs) => {
                            return(
                              <div className='bg-white rounded-md' key={idxs}>
                                <img className='w-8 h-8 rounded-full' alt='icons' src={require(`../../Assets/Detail/${iconData[names?.name] || 'DEFAULT'}.png`)} />
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
          {loading && (
            <div className='flex justify-center items-center'>
              <ThreeDots
              height="80"
              width="80"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor = '#FFFFFF'
              color="#FFFFFF" 
              barColor = '#FFFFFF'
            />
           </div>
          )}
        </div>
        : <div className='h-screen text-center justify-center items-center flex text-white text-2xl'>Хоосон байна!</div>  
      }
        <Footer />
    </div>
  )
}

export default Detail