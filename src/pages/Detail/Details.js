import React, {useEffect, useState, useRef} from 'react'
import Santa from '../../Assets/santa-claus.png'
import {FaCalendarAlt, FaPhoneAlt} from 'react-icons/fa'
import axios from 'axios'
import Footer from '../Slot/component/Footer'
import { Link } from 'react-router-dom'
import moment from 'moment/moment'
import { ThreeDots } from 'react-loader-spinner'

const Detail = () => {

  const [log, setLog] = useState([])
  const [loading, setLoading] = useState(false);
  const listInnerRef = useRef();
  var limit = 10;

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setLoading(true);
        limit += 10;
        fetchData();
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    axios.get("log", 
          {
            params: {
              isdn: '99111096',
              fnfId: 3,
              offset: 0,
              limit: limit,
              isAsc: false
            }
          },
          {headers: {
            "sessionId" : "61a78fa3180c3ee77c992c95d474351af121bc38"
          }}
          )
          .then(res => {
            setLog(res.data.record)
          })
          .catch(err => {
            console.log(err)
          }).finally(() => {
            setLoading(false);
          })
  }

  return (
    <div className='bg-mobi-pinl h-screen flex flex-col justify-between'>
        <div className='flex justify-end px-2'>
            <Link to={"/edit"}><p className='text-white text-xl mt-2'>Edit</p></Link>
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='text-white text-xl mt-2'>• Дэлгэрэнгүй •</h1>
        </div>
        <div className=' overflow-y-scroll h-[640px] px-2'  onScroll={() => onScroll()} ref={listInnerRef}>
          {
            log.map((items, idx) => {
              return(
                // ${items.colors}
                <div key={idx} className='bg-white h-24 w-full flex rounded-xl py-2 px-2 space-x-3 mt-2'>
                    {/* <div className={`bg-red-500 flex flex-col justify-center items-center w-24 h-full rounded-lg text-white`}>
                      <h1 className='text-3xl'>{items.rank}</h1>
                      <p>Байр</p>
                    </div> */}
                    <div className='flex flex-col justify-center w-full'>
                      <div className='flex ml-2'>
                        <FaCalendarAlt />
                        <h1 className='text-xs ml-2'>{moment(items.date).format('YYYY/MM/DD, HH:mm:ss')}</h1>
                      </div>
                      <div className='flex justify-between items-center text-xs mt-2'>
                        <div className='flex items-center'>
                          <div className='flex ml-2 space-x-3 justify-center items-center'>
                            <FaPhoneAlt />
                            <p>{items.isdn}</p>
                          </div>
                          
                          <div className=''>
                            <p>{items.familyName}</p>
                          </div>
                        </div>
                          <div className=''>
                            <h1>Нийлбэр оноо</h1>
                            <p>{items.point}</p>
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