import React, { useReducer, useRef, useState, useEffect} from "react";
import "./Slot.css";
import LAMB from "../../Assets/santa-claus.png";
import WOLF from "../../Assets/grinch.png";
import SNOWMAN from "../../Assets/snowman.png";
import gift from "../../Assets/gift.png";
import gifts from "../../Assets/text.png";
import back from '../../Assets/back.jpg'
import Footer from "./component/Footer";
import axios from "axios";
import Swal from 'sweetalert2'
import footerBg from '../../Assets/footer/footerBg.png'
import { useNavigate , useSearchParams } from "react-router-dom";

const santaObj = {
  name: 'LAMB',
  image: LAMB
}
const grinchObj = {
  name: 'WOLF',
  image: WOLF
}
const snowmanObj = {
  name: 'REINDEER',
  image: SNOWMAN
}

const Slots = ({data, fetchData, sessionId, setSessionId, rank, setRank, fetchFamily}) => {

const [searchParams, setSearchParams] = useSearchParams();
const [playResult, setPlayResult] = useState()
const [loading, setLoading] = useState(false);
const [disabled, setDisabled] = useState(false);
const [reload, setReload] = useState(false);
// var counter = 0;

const navigate = useNavigate();

useEffect(() => {
  let sid = searchParams.get('s');
  if(sid != null) {
    let decryptedSid = sid.slice(0,1).concat(sid.slice(5,9)).concat(sid.slice(1,5)).concat(sid.slice(9));
    const decrypted = atob(decryptedSid)
    setSessionId(decrypted)
    localStorage.setItem("sessionId", decrypted)
  } else {
    return
  }
}, [])

useEffect(() => {
  fetchData();
  setRank();
  fetchFamily();
},[sessionId])

// useEffect(() => {
//   setDisabled(false)
// },[data])

  const [values, setValues] = useReducer((state, newState) => ({...state, ...newState}), {
    dummy1: santaObj.image,
    dummy2: grinchObj.image,
    dummy3: snowmanObj.image
  });
  const defaultProps = {
    Dummy: [santaObj, grinchObj, snowmanObj, santaObj, grinchObj, snowmanObj, santaObj, grinchObj, snowmanObj, santaObj, grinchObj, snowmanObj, santaObj, grinchObj, snowmanObj, santaObj, grinchObj, snowmanObj, santaObj, grinchObj, snowmanObj, santaObj, grinchObj, snowmanObj , santaObj, grinchObj, snowmanObj , santaObj, grinchObj, snowmanObj ,santaObj, grinchObj, snowmanObj ,santaObj, grinchObj, snowmanObj ,santaObj, grinchObj, snowmanObj ,santaObj, grinchObj, snowmanObj ,santaObj, grinchObj, snowmanObj],
  };
  const slotRef = [useRef(), useRef(), useRef()];

  useEffect(() => {
    if(disabled && !reload) {
      setReload(true);
      handleLotterySubmittion();
    }
  },[loading, disabled])

  async function handleLotterySubmittion(){

    if(data?.family?.availableTicket < 1) {
      return;
    }

    try {
      let res = await axios.get(
        "/api/play",
        {
          headers: {
            sessionId : localStorage.getItem("sessionId").length == 0 ? sessionId : localStorage.getItem("sessionId"),
          },
        }
      )
  
      if(res.data.code === 'SESSION_EXPIRED'){
        setLoading(false);
        return navigate("https://api.mobicom.mn?code=0");
      }
  
      setPlayResult(res.result)
      slotRef.forEach((slot, i) => {
        const selected = triggerSlotRotation(slot.current, res?.data?.result?.items[i]);
        setValues({ [`dummy${i++}`]: selected });
      })
      slotRef.forEach((slot, i) => {
        const selected = triggerSlotRotation(slot.current, res?.data?.result?.items[i]);
        setValues({ [`dummy${i++}`]: selected });
      })
      setLoading(true);
      setTimeout(() => {
        // console.log('first')
        setLoading(false)
        setTimeout(() => {
          Swal.fire({
            imageUrl: `${gifts}`,
            imageHeight: 50,
            title: (`${res?.data?.result?.point} оноо авлаа.`),
            width: 250,
            color: '#FFFFFF',
            showConfirmButton: true,
            confirmButtonColor: '#ef4444',
            background: `url(${back})`,
          })
          fetchData();
          setDisabled(false);
          setReload(false);
        }, 2000);
      }, 500);
      
    } catch (error) {
      alert(error);
    }
  }

  async function handleSubmit() {
    setDisabled(true);
    // setLoading(false) && setLoading(true)
    if(data?.family?.availableTicket < 1) {
      Swal.fire({
        imageUrl: `${gifts}`,
        imageHeight: 50,
        title: (`Таны эрх дууссан байна!`),
        width: 250,
        color: '#FFFFFF',
        showConfirmButton: true,
        confirmButtonColor: '#ef4444',
        background: `url(${back})`,
      })
      setDisabled(false);
      setLoading(false);
      return 0;
    }
  }
  
  const triggerSlotRotation = (ref, data) => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let idx = 0;
    let temp = parseInt(Math.random() * 10);
    switch(data?.name) {
      case "LAMB":
        break;
      case "WOLF":
        idx = 1;
        break;
      case "REINDEER":
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
    !data ? <div className="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
    <div className="flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
          <span className="sr-only">Уучлаарай таны нэвтрэх хугацаа дууссан байна!</span>404
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">Нүүр хуудас руу буцан уу!</p>
      </div>
    </div>
  </div> :
    <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="w-full flex flex-col justify-between h-screen">
      <div className="flex flex-col justify-between overflow-y-scroll h-screen">
      <div className="">
        <div className='flex flex-col relative justify-center items-center pt-5'>
          <img className=' max-w-[160px]' alt="gifts" src={gifts} />
          <button disabled={loading} type="button" className={`${loading ? "roll rolling" : "roll"} max-w-[250px] iPhone-5:max-w-[200px] iPhone-8-plus:max-w-[250px] tablet:max-w-[260px] iPhone-8:max-w-[210px] iPhone-12:max-w-[210px] absolute top-[105px] z-20`} onClick={() => { !disabled && handleSubmit()}} ><img alt="icons"  src={gift} /></button>
          {/* disabled={() => setLoading(false)} */}
          {/* className={`${loading ? "roll rolling" : "roll"} max-w-[250px] left-[82px] iPhone-8-plus:max-w-[250px] tablet:max-w-[260px] iPhone-8:max-w-[210px] iPhone-12:max-w-[290px] absolute top-[105px] z-20`} */}
          {/* <img onClick={handleSubmit} alt="icons" className={`${loading ? "roll rolling" : "roll"} max-w-[250px] iPhone-8-plus:max-w-[250px] tablet:max-w-[260px] iPhone-8:max-w-[210px] iPhone-12:max-w-[290px] absolute top-[105px] z-20`} src={gift} /> */}
        </div>
        <div className="relative">
          <div className="absolute top-[117px] iPhone-8-plus:top-[120px] iPhone-5:top-[75px] iPhone-12-pro:top-[127px] iPhone-12-plus:top-[150px] iPhone-8:top-[100px] tablet:top-[125px] w-full flex justify-center items-center">
            <div className="flex justify-between items-center w-[60%] iPhone-8-plus:w-[50%] iPhone-5:w-[50%] iPhone-12:w-48% iPhone-8:w-[48%] tablet:w-[58%] boxer bg-white h-32 iPhone-8:h-24">
              <div className="slot">
                <section>
                  <div className={loading ? "containers" : 'containers containerStop'} ref={slotRef[0]}>
                    {defaultProps.Dummy.map((item, idx) => (
                      <div className="flex justify-center items-center" key={idx}>
                        <div className="flex justify-center items-center">
                          <img alt="icons" className="w-[45px] tablet:w-[55px] iPhone-8:w-[45px]" src={item.image} />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="slot pl-[10px] iPhone-8-plus:pl-[1px] iPhone-12-plus:pl-2">
                <section>
                  <div className={loading ? "containers" : 'containers containerStop'} ref={slotRef[1]}>
                    {defaultProps.Dummy.map((item, key) => (
                      <div key={key}>
                        <img alt="icons" src={item.image} className="w-[45px] tablet:w-[55px] iPhone-8:w-[45px]" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="slot pr-[10px]">
                <section className="">
                  <div className={loading ? "containers" : 'containers containerStop'} ref={slotRef[2]}>
                    {defaultProps.Dummy.map((item, key) => (
                      <div key={key}>
                        <img alt="icons" src={item.image} className="w-[45px] tablet:w-[55px] iPhone-8:w-[45px]" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end mx-4">
        <div className="flex justify-between items-center w-full bg-white rounded-md">
          <div className=' bg-white rounded-tl-md flex flex-col justify-between items-center rounded-bl-md iPhone-5:text-[6px] iPhone-8:text-[10px] w-[70%] p-2'>
              <div className='flex justify-between text-black w-full'>
                  <div className='w-full'>
                      <div className='flex justify-between w-full text-xs iPhone-5:text-[6px] iPhone-8:text-[10px]'>
                          <div className='flex justify-between space-x-4'>
                              <p style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='w-16 h-8 rounded-md text-white text-xs flex justify-start pl-1 items-center' >#{rank?.data?.result?.rank}</p>
                              <div className='text-left iPhone-5:text-[6px] iPhone-8:text-[10px]'>
                                <p>Гишүүд - {data?.family?.memberCount}</p>
                                <p className='text-[10px] iPhone-5:text-[6px] iPhone-8:text-[10px]'>{data?.family?.nameCode}</p>
                              </div>
                          </div>    
                          <div className="flex flex-col iPhone-5:text-[6px] iPhone-8:text-[10px]">
                            <h1>Таны эрх</h1>
                            <h1>{data?.family?.availableTicket}</h1>
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>
          <div style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='flex flex-col rounded-md w-[30%] h-14 p-2 text-white'>
              <h1 className='text-base iPhone-5:text-[6px] iPhone-8:text-[10px]'>Нийт оноо</h1>
              <p className="text-right font-semibold text-base iPhone-5:text-[6px] iPhone-8:text-[10px] iPhone-5:text-center">{data?.family?.total}</p>
          </div>
        </div>
        <div className='w-full h-[13%] iPhone-8-plus:h-[40%] iPhone-12-plus:h-[50%] iPhone-12:h-[85px] iPhone-5:h-[25%] tablet:h-[50%] overflow-y-scroll text-white pt-3 iPhone-5:pt-0 px-1'>
          {
            data?.detail?.map((item , key) => {
              return(
                  <div key={key} className='flex items-center justify-between border-b py-2 '>
                    <div className="h-10 w-[25%]">
                      <img className='w-10' alt='icons' src={require(`../../Assets/Icons/${data?.family?.iconCode}.png`)} />
                    </div>
                    <p className="font-bold text-center text-xs w-[25%]">{item?.isdn}</p>
                    <p className="font-bold text-center text-xs w-[25%]">{item?.ticketBalance}</p>
                    <p className="font-bold text-center text-xs w-[25%]">{item?.pointTotal}</p>
                </div>
              )
            })
          }
        </div>  
      </div>
      </div>
      <Footer />
    </div>
  );
};
export default Slots;
