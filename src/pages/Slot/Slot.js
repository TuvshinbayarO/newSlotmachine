import React, { useReducer, useRef, useState, useEffect } from "react";
import "./Slot.css";
import santa from "../../Assets/santa-claus.png";
import elf from "../../Assets/elf.png";
import grinch from "../../Assets/grinch.png";
import snowman from "../../Assets/snowman.png";
import gift from "../../Assets/gift.png";
import gifts from "../../Assets/text.png";
import back from '../../Assets/back.jpg'
import Footer from "./component/Footer";
import axios from "axios";
import swal from "sweetalert";
import { ProgressBar } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const santaObj = {
  name: 'SANTA',
  image: santa
}
// const elfObj = {
//   name: 'ELF',
//   image: elf
// }
const grinchObj = {
  name: 'GRINCH',
  image: grinch
}
const snowmanObj = {
  name: 'SNOWMAN',
  image: snowman
}

const Slots = ({data, familyData, fetchFamily, fetchData}) => {

  console.log('data: ', data)
  console.log('familyData: ' ,familyData)

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
        "play",
        // {
        //   params: {
        //     isdn: "99111096",
        //     fnfId: 3
        //   },
        // },
        {
          headers: {
            sessionId: "SID_5E850B8_18484BD0C9077",
          },
        }
      ).then((res) => {
        console.log('play:' ,res)
        console.log("res",res);
        if(res?.data?.customer?.ticketBalance < 1) {
          swal("Эрх дууссан байна!", "", "error");
          return 0;
        }

        setTimeout(() => {
          slotRef.forEach((slot, i) => {
            const selected = triggerSlotRotation(slot.current, res?.data?.result?.items[i]);
            setValues({ [`dummy${i++}`]: selected });
          });
          setLoading(false);
          setTimeout(() => {
            swal(`${res?.data?.result?.point} оноо авлаа.`, "", "success");
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
    console.log("data",data);
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let idx = 0;
    let temp = parseInt(Math.random() * 10);
    switch(data.name) {
      case "SANTA":
        break;
      // case "ELF":
      //   idx = 1;
      //   break;
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
    <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="w-full flex flex-col justify-between h-screen">
      <div>
        <div className='flex flex-col relative justify-center items-center'>
          <img className=' max-w-[160px]' alt="gifts" src={gifts} />
          <img alt="icons" className="max-w-[250px] tablet:max-w-[300px] iPhone-12:max-w-[290px] absolute top-16 z-20" src={gift} />
        </div>
        <div className="relative">
          <div className="absolute  top-[93px] tablet:top-28 w-full flex justify-center items-center">
            <div className="flex justify-center ml-4 tablet:ml-0 items-center w-[60%] tablet:w-[73%] bg-white h-32">
              <div className="slot">
                <section>
                  <div className={loading ? "container" : 'container containerStop'} ref={slotRef[0]}>
                    {defaultProps.Dummy.map((item, idx) => (
                      <div className="flex justify-center items-center" key={idx}>
                        <div className="flex justify-center items-center">
                          <img alt="icons" className="w-[45px] tablet:w-[67px]" src={item.image} />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="slot">
                <section>
                  <div className={loading ? "container" : 'container containerStop'} ref={slotRef[1]}>
                    {defaultProps.Dummy.map((item, key) => (
                      <div key={key}>
                        <img alt="icons" src={item.image} className="w-[45px] tablet:w-[67px]" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="slot">
                <section>
                  <div className={loading ? "container" : 'container containerStop'} ref={slotRef[2]}>
                    {defaultProps.Dummy.map((item, key) => (
                      <div key={key}>
                        <img alt="icons" src={item.image} className="w-[45px] tablet:w-[67px]" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            
            <div className={`${!loading ? "roll rolling" : "roll"} absolute cursor-pointer text-white top-[175px] tablet:top-[223px] z-30 flex justify-center items-center text-center w-[104px] tablet:w-[119px] rounded-2xl bg-red-500 h-12 tablet:h-[50px]`}
              onClick={handleSubmit}
            >
              <p className="">
                {loading ? "эргэж байна!" : "тоглох"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end mx-4 mt-40">
        <div className="flex justify-between items-center w-full">
          <div className=' bg-white rounded-tl-md rounded-bl-md w-[70%] p-4'>
              <div className='flex justify-between text-black'>
                  <div className='w-full'>
                      <div className='flex justify-between w-full text-xs'>
                          <div className='flex justify-between space-x-3'>
                              {/* <img alt='icons' className='w-8 h-8 rounded-full' src={santa} /> */}
                              <p className='w-16 h-8 rounded-md text-white text-base bg-red-500 justify-center flex items-center' >#{familyData?.family?.rank}</p>
                              <div className='text-left'>
                                <h1>Гишүүд - {data?.family?.memberCount}</h1>
                                <p>{data?.family?.nameCode}</p>
                              </div>
                          </div>    
                          <div className="flex flex-col">
                            <h1>Таны эрх</h1>
                            <h1>{data?.customer?.ticketBalance}</h1>
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>
          <div className='flex flex-col p-3 rounded-tr-md rounded-br-md w-[30%] bg-mobi-red text-white'>
              <h1 className='text-base'>Нийт оноо</h1>
              <p className="text-right font-semibold text-base">{familyData?.family?.total}</p>
          </div>
        </div>
        <div className='w-full h-[13%] tablet:h-[34%]  overflow-y-scroll'>
          {
            familyData.detail?.map((item , key) => {
              return(
                  <div key={key} className='flex items-center justify-between border-b py-2'>
                    <img className='w-12' alt='icons' src={require(`../../Assets/Icons/${familyData.family.iconCode}.png`)} />
                    <p>{item.customerInfo.isdn}</p>
                    <p>{item.customerInfo.ticketBalance}</p>
                    <p>{item.familyInfo.pointTotal}</p>
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
