import React, { useReducer, useRef } from "react";
import "./Slot.css";
import Santa from "../../Assets/santa-claus.png";
import elf from "../../Assets/elf.png";
import grinch from "../../Assets/grinch.png";
import Snowman from "../../Assets/snowman.png";
import gift from "../../Assets/gift.png";
import gifts from "../../Assets/text.png";
import back from '../../Assets/back.jpg'
import Footer from "./component/Footer";

const Slots = () => {
  const [values, setValues] = useReducer((state, newState) => ({...state, ...newState}), {
    dummy1: Santa,
    dummy2: grinch,
    dummy3: Snowman,
    rolling: false,
  });
  const defaultProps = {
    Dummy: [Santa, elf, grinch, Snowman, Santa, elf, grinch, Snowman, Santa, elf, grinch, Snowman , Santa, elf, grinch, Snowman , Santa, elf, grinch, Snowman ,Santa, elf, grinch, Snowman ,Santa, elf, grinch, Snowman ,Santa, elf, grinch, Snowman ,Santa, elf, grinch, Snowman ,Santa, elf, grinch, Snowman],
  };
  const slotRef = [useRef(), useRef(), useRef()];
  const roll = () => {
    setValues({ rolling: true });
    setTimeout(() => {
      setValues({ rolling: false });
    }, 1000);
    slotRef.forEach((slot, i) => {
      const selected = triggerSlotRotation(slot.current);
      setValues({ [`dummy${i++}`]: selected });
 
    });
  };
  
  const triggerSlotRotation = (ref) => {
    function setTop(bottom) {
      ref.style.bottom = `${bottom}px`;
    }
    let options = ref.children;
    let randomOption = Math.floor(Math.random() * defaultProps.Dummy.length );
    let choosenOption = options[randomOption];

  
    setTop(-choosenOption.offsetTop + 2);
    return defaultProps.Dummy[randomOption];
    
  };

  const Data = [
    {
        id: 1,
        Name: "Aav",
        ticket: '5 эрх',
        point: '250 оноо',
        img: Santa
    },
    {
        id: 2,
        Name: "Aav",
        ticket: '5 эрх',
        point: '250 оноо',
        img: Santa
    },{
        id: 3,
        Name: "Aav",
        ticket: '5 эрх',
        point: '250 оноо',
        img: Santa
    },
    {
        id: 4,
        Name: "Aav",
        ticket: '5 эрх',
        point: '250 оноо',
        img: Santa
    }
    ,
    {
        id: 5,
        Name: "Aav",
        ticket: '5 эрх',
        point: '250 оноо',
        img: Santa
    }
  ]

  return (
    <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="flex flex-col justify-center items-center relative h-screen">
      <div className='flex flex-col justify-center items-center absolute top-0'>
        <img className='w-64' alt="gifts" src={gifts} />
      </div>
      <img alt="icons" className="absolute top-[110px] max-w-[350px] z-20" src={gift} />
      <div className="absolute top-[306px]">
        <div className="bg-white w-72 h-32">
      <div className="slot">
        <section>
          <div className={values.rolling ? "container" : 'container containerStop'} ref={slotRef[0]}>
            {defaultProps.Dummy.map((item, i) => (
              <div className="">
                <div key={i}>
                  <img alt="icons" src={item} width={67} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="slot">
        <section>
          <div className={values.rolling ? "container" : 'container containerStop'} ref={slotRef[1]}>
            {defaultProps.Dummy.map((item, key) => (
              <div key={key}>
                <img alt="icons" src={item} width={67} />
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="slot">
        <section>
          <div className={values.rolling ? "container" : 'container containerStop'} ref={slotRef[2]}>
            {defaultProps.Dummy.map((item, key) => (
              <div key={key}>
                <img alt="icons" src={item} width={67} />
              </div>
            ))}
          </div>
        </section>
      </div>
      </div>
      </div>
      <div
        className={`${!values.rolling ? "roll rolling" : "roll"} absolute cursor-pointer text-white top-[411px] z-30 flex justify-center items-center text-center w-36 rounded-2xl bg-red-500 h-[57px]`}
        onClick={!values.rolling && roll}
        disabled={values.rolling}
      >
        {values.rolling ? "Spining..." : "Spin"}
      </div>
          <div className='absolute top-[470px] bg-white w-[90%] mt-14 rounded-xl'>
                <div className='flex justify-between'>
                    <div className='flex space-x-2'>
                        <img alt='icons' className='w-12 h-12 rounded-full' src={Santa} />
                        <div className=''>
                            <h1 className=' text-xs'>Багийн гишүүн-0</h1>
                            <h1 className=' font-semibold'>Багийн нэр</h1>
                        </div>
                    </div>
                    <div className='bg-red-500 text-white w-[40%] text-center rounded-l-md rounded-tl'>
                        <h1>Нийлбэр оноо</h1>
                        <p>0’000</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[15%] px-5 overflow-y-scroll  absolute top-[580px]'>
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
  );
};
export default Slots;
