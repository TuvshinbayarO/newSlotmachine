import React, { useReducer, useRef, useState, useEffect} from "react";
import "./Slot.css";
import santa from "../../Assets/santa-claus.png";
import grinch from "../../Assets/grinch.png";
import snowman from "../../Assets/snowman.png";
import gift from "../../Assets/gift.png";
import gifts from "../../Assets/text.png";
import back from '../../Assets/back.jpg'
import Footer from "./component/Footer";
import axios from "axios";
import Swal from 'sweetalert2'
import { useSearchParams } from "react-router-dom";

const santaObj = {
  name: 'SANTA',
  image: santa
}
const grinchObj = {
  name: 'GRINCH',
  image: grinch
}
const snowmanObj = {
  name: 'SNOWMAN',
  image: snowman
}

const Slots = ({data, familyData, fetchFamily, fetchData, sessionId}) => {
const [searchParams, setSearchParams] = useSearchParams();
localStorage.setItem("sessionId", searchParams.get('s'))
// useEffect(() => {
//   let params = [];
//   for(let entry of searchParams.entries()) {
//     params.push(entry);
//   }
  
// }, [params])


// console.log('setSearchParams', params)

useEffect(() => {
  fetchData();
  fetchFamily();
}, [])

  const [values, setValues] = useReducer((state, newState) => ({...state, ...newState}), {
    dummy1: santaObj.image,
    dummy2: grinchObj.image,
    dummy3: snowmanObj.image
  });
  const defaultProps = {
    Dummy: [santaObj, grinchObj, snowmanObj, santaObj, grinchObj, snowmanObj, santaObj, grinchObj, snowmanObj, santaObj, grinchObj, snowmanObj, santaObj, grinchObj, snowmanObj, santaObj, grinchObj, snowmanObj, santaObj, grinchObj, snowmanObj, santaObj, grinchObj, snowmanObj , santaObj, grinchObj, snowmanObj , santaObj, grinchObj, snowmanObj ,santaObj, grinchObj, snowmanObj ,santaObj, grinchObj, snowmanObj ,santaObj, grinchObj, snowmanObj ,santaObj, grinchObj, snowmanObj ,santaObj, grinchObj, snowmanObj],
  };
  const slotRef = [useRef(), useRef(), useRef()];
  const [loading, setLoading] = useState(false);

  const handleSubmit = (() => { 
      setLoading(true);
      axios.get(
        "api/play",
        {
          headers: {
            sessionId: sessionId.s,
          },
        }
      ).then((res) => {
        if(res?.data?.result?.customer?.ticketBalance < 0) {
          Swal.fire({
            imageUrl: `${gifts}`,
            imageHeight: 100,
            title: (`Таны эрх дууссан байна!`),
            width: 600,
            color: '#FFFFFF',
            showConfirmButton: true,
            confirmButtonColor: '#ef4444',
            background: `url(${back})`,
          })
          return 0;
        }

        setTimeout(() => {
          slotRef.forEach((slot, i) => {
            const selected = triggerSlotRotation(slot.current, res?.data?.result?.items[i]);
            setValues({ [`dummy${i++}`]: selected });
          });
          setLoading(false);
          setTimeout(() => {
            Swal.fire({
              imageUrl: `${gifts}`,
              imageHeight: 100,
              title: (`${res?.data?.result?.point} оноо авлаа.`),
              width: 400,
              color: '#FFFFFF',
              showConfirmButton: true,
              confirmButtonColor: '#ef4444',
              padding: '3em',
              background: `url(${back})`,
            })
            fetchFamily();
            fetchData();
          }, 3000);
        }, 500);
      }).catch((err) => {
        alert(err);
        setLoading(false);
      })
    
  })
  
  const triggerSlotRotation = (ref, data) => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let idx = 0;
    let temp = parseInt(Math.random() * 10);
    switch(data.name) {
      case "SANTA":
        break;
      case "GRINCH":
        idx = 1;
        break;
      case "SNOWMAN":
        idx = 2;
        break;
    }
    idx += temp * 3;
    
    let options = ref.children;
    let randomOption = idx;
    let choosenOption = options[idx];
  
    setTop(-choosenOption.offsetTop + 2);
    return defaultProps.Dummy[randomOption].image;
  };

  return (
    // loading ? 
    // <>
    //   <ProgressBar
    //     height="80"
    //     width="80"
    //     ariaLabel="progress-bar-loading"
    //     wrapperStyle={{}}
    //     wrapperClass="progress-bar-wrapper"
    //     borderColor = '#F4442E'
    //     barColor = '#51E5FF'
    //   />
    // </> :
    !familyData ? <div className="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
    <div className="flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
          <span className="sr-only">Error</span>404
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
        <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
        <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</a>
      </div>
    </div>
  </div> :
    <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="w-full flex flex-col justify-between h-screen">
      <div>
        <div className='flex flex-col relative justify-center items-center pt-5'>
          <img className=' max-w-[160px]' alt="gifts" src={gifts} />
          <img alt="icons" className="max-w-[250px] tablet:max-w-[260px] iPhone-12:max-w-[290px] absolute top-[105px] z-20" src={gift} />
        </div>
        <div className="relative">
          <div className="absolute  top-[93px] tablet:top-28 w-full flex justify-center items-center">
            <div className="flex justify-center ml-4 tablet:ml-0 items-center w-[60%] tablet:w-[50%] bg-white h-32">
              <div className="slot">
                <section>
                  <div className={loading ? "container" : 'container containerStop'} ref={slotRef[0]}>
                    {defaultProps.Dummy.map((item, idx) => (
                      <div className="flex justify-center items-center" key={idx}>
                        <div className="flex justify-center items-center">
                          <img alt="icons" className="w-[45px] tablet:w-[55px]" src={item.image} />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="h-24 border ml-1"></div>
              <div className="slot">
                <section>
                  <div className={loading ? "container" : 'container containerStop'} ref={slotRef[1]}>
                    {defaultProps.Dummy.map((item, key) => (
                      <div key={key}>
                        <img alt="icons" src={item.image} className="w-[45px] tablet:w-[55px]" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="h-24 border"></div>
              <div className="slot">
                <section>
                  <div className={loading ? "container" : 'container containerStop'} ref={slotRef[2]}>
                    {defaultProps.Dummy.map((item, key) => (
                      <div key={key}>
                        <img alt="icons" src={item.image} className="w-[45px] tablet:w-[55px]" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            
            <div className={`${!loading ? "roll rolling" : "roll"} absolute cursor-pointer text-white top-[175px] tablet:top-[205px] z-30 flex justify-center items-center text-center w-[104px] tablet:w-[119px] h-12 tablet:h-[50px]`}
              onClick={handleSubmit}
            >
              <p className=" font-bold">
                тоглох
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end mx-4 mt-64">
        <div className="flex justify-between items-center w-full bg-white rounded-md">
          <div className=' bg-white rounded-tl-md flex flex-col justify-between items-center rounded-bl-md w-[70%] p-2'>
              <div className='flex justify-between text-black w-full'>
                  <div className='w-full'>
                      <div className='flex justify-between w-full text-xs'>
                          <div className='flex justify-between space-x-4'>
                              <p className='w-16 h-8 rounded-md text-white text-xs bg-red-500 flex justify-start pl-1 items-center' >#{familyData?.family?.rank}</p>
                              <div className='text-left '>
                                <h1>Гишүүд - {data?.family?.memberCount}</h1>
                                <p className='text-[10px]'>{data?.family?.nameCode}</p>
                              </div>
                          </div>    
                          <div className="flex flex-col">
                            <h1>Таны эрх</h1>
                            <h1>{data?.family?.availableTicket}</h1>
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>
          <div className='flex flex-col rounded-md w-[30%] h-14 p-2 bg-mobi-red text-white'>
              <h1 className='text-base'>Нийт оноо</h1>
              <p className="text-right font-semibold text-base">{familyData?.family?.total}</p>
          </div>
        </div>
        <div className='w-full h-[13%] tablet:h-[70%] overflow-y-scroll text-white pt-3 px-1'>
          {
            familyData.detail?.map((item , key) => {
              return(
                  <div key={key} className='flex items-center justify-between border-b py-2 '>
                    <img className='w-10' alt='icons' src={require(`../../Assets/Icons/${familyData.family?.iconCode}.png`)} />
                    <p className="font-bold text-center">{item.customerInfo?.isdn}</p>
                    <p className="font-bold text-center">{item.customerInfo?.ticketBalance}</p>
                    <p className="font-bold text-center">{item.familyInfo?.pointTotal}</p>
                </div>
              )
            })
          }
        </div>  
      </div>
      <Footer />
    </div>
  );
};
export default Slots;
