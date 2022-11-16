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

const santaObj = {
  name: 'SANTA',
  image: santa
}
const elfObj = {
  name: 'ELF',
  image: elf
}
const grinchObj = {
  name: 'GRINCH',
  image: grinch
}
const snowmanObj = {
  name: 'SNOWMAN',
  image: snowman
}

const Slots = ({data}) => {
  const [values, setValues] = useReducer((state, newState) => ({...state, ...newState}), {
    dummy1: santaObj.image,
    dummy2: grinchObj.image,
    dummy3: snowmanObj.image
  });
  const defaultProps = {
    Dummy: [santaObj, elfObj, grinchObj, snowmanObj, santaObj, elfObj, grinchObj, snowmanObj, santaObj, elfObj, grinchObj, snowmanObj , santaObj, elfObj, grinchObj, snowmanObj , santaObj, elfObj, grinchObj, snowmanObj ,santaObj, elfObj, grinchObj, snowmanObj ,santaObj, elfObj, grinchObj, snowmanObj ,santaObj, elfObj, grinchObj, snowmanObj ,santaObj, elfObj, grinchObj, snowmanObj ,santaObj, elfObj, grinchObj, snowmanObj],
  };
  const slotRef = [useRef(), useRef(), useRef()];
  const [loading, setLoading] = useState(false);

  const handleSubmit = (() => {
    if(data.customer.ticketBalance < 1) {
      swal("Эрх дууссан байна!", "", "error");
      return 0;
    } 
      setLoading(true);
      axios.get(
        "play",
        {
          params: {
            isdn: "99111096",
          },
        },
        {
          headers: {
            sessionId: "61a78fa3180c3ee77c992c95d474351af121bc38",
          },
        }
      ).then((res) => {
        setTimeout(() => {
          slotRef.forEach((slot, i) => {
            const selected = triggerSlotRotation(slot.current, res.data.items[i]);
            setValues({ [`dummy${i++}`]: selected });
          });
          setLoading(false);
          setTimeout(() => {
            swal(`${res.data.point} оноо авлаа.`, "", "success");
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
    console.log("rand", temp);
    switch(data.name) {
      case "SANTA":
        break;
      case "ELF":
        idx = 1;
        break;
      case "GRINCH":
        idx = 2;
        break;
      case "SNOWMAN":
        idx = 3;
        break;
    }
    idx += temp * 4;
    
    let options = ref.children;
    let randomOption = idx;
    let choosenOption = options[idx];
  
    setTop(-choosenOption.offsetTop + 2);
    return defaultProps.Dummy[randomOption].image;
  };

  const Data = [
    {
        id: 1,
        Name: "Aav",
        ticket: '5 эрх',
        point: '250 оноо',
        img: santa
    },
    {
        id: 2,
        Name: "Aav",
        ticket: '5 эрх',
        point: '250 оноо',
        img: santa
    },{
        id: 3,
        Name: "Aav",
        ticket: '5 эрх',
        point: '250 оноо',
        img: santa
    },
    {
        id: 4,
        Name: "Aav",
        ticket: '5 эрх',
        point: '250 оноо',
        img: santa
    }
    ,
    {
        id: 5,
        Name: "Aav",
        ticket: '5 эрх',
        point: '250 оноо',
        img: santa
    }
  ]

  return (
    <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="w-full flex flex-col justify-between h-screen">
      <div>
        <div className='flex flex-col relative justify-center items-center'>
          <img className=' max-w-[160px]' alt="gifts" src={gifts} />
          <img alt="icons" className="max-w-[250px] tablet:max-w-[350px] absolute top-16 z-20" src={gift} />
        </div>
        <div className="relative">
          <div className="absolute  top-[93px] tablet:top-36 w-full flex justify-center items-center">
            <div className="flex justify-center ml-4 tablet:ml-0 items-center w-[60%] tablet:w-[75%] bg-white h-32">
              <div className="slot">
                <section>
                  <div className={loading ? "container" : 'container containerStop'} ref={slotRef[0]}>
                    {defaultProps.Dummy.map((item, idx) => (
                      <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center" key={idx}>
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
            <div className={`${!loading ? "roll rolling" : "roll"} absolute cursor-pointer text-white top-[175px] tablet:top-[265px] z-30 flex justify-center items-center text-center w-[104px] tablet:w-36 rounded-2xl bg-red-500 h-12 tablet:h-[57px]`}
              onClick={handleSubmit}
            >
              <p className="text-xs tablet:text-sm">
                {loading ? "эргэж байна!" : "тоглох"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <div className=' bg-red-500 rounded-md p-3'>
            <div className='flex justify-between text-white'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-white text-xs'>Таны байр</h1>
                    <p className='text-white text-xl'>000009</p>
                </div>
                <div className='flex'>
                    <div className='flex text-xs'>
                        <div className='flex'>
                            <img alt='icons' className='w-8 h-8 rounded-full' src={santa} />
                            <div className='text-left'>
                            <h1>Багийн гишүүн - 0</h1>
                            <p>King</p>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className='text-left'>
                    <h1 className='text-xs'>Нийлбэр оноо</h1>
                    <p>0’000</p>
                </div>
            </div>
        </div>
        <div className='w-full h-[13%] tablet:h-[22%] px-5 overflow-y-scroll'>
          {
            Data.map((item , key) => {
              return(
                  <div key={key} className='flex items-center justify-between border-b py-2'>
                    <img className='w-12' alt='icons' src={item.img} />
                    <p>{item.Name}</p>
                    <p>{item.ticket}</p>
                    <p>{item.point}</p>
                </div>
              )
            })
          }
        </div>  
        <Footer />
      </div>
    </div>
  );
};
export default Slots;
