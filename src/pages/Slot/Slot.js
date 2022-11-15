import React, { useReducer, useRef, useState, useEffect } from "react";
import "./Slot.css";
import Santa from "../../Assets/santa-claus.png";
import elf from "../../Assets/elf.png";
import grinch from "../../Assets/grinch.png";
import Snowman from "../../Assets/snowman.png";
import gift from "../../Assets/gift.png";
import gifts from "../../Assets/text.png";
import back from '../../Assets/back.jpg'
import Footer from "./component/Footer";
import axios from "axios";

const Slots = () => {
  const [values, setValues] = useReducer((state, newState) => ({...state, ...newState}), {
    dummy1: Santa,
    dummy2: grinch,
    dummy3: Snowman
  });
  const defaultProps = {
    Dummy: [Santa, elf, grinch, Snowman, Santa, elf, grinch, Snowman, Santa, elf, grinch, Snowman , Santa, elf, grinch, Snowman , Santa, elf, grinch, Snowman ,Santa, elf, grinch, Snowman ,Santa, elf, grinch, Snowman ,Santa, elf, grinch, Snowman ,Santa, elf, grinch, Snowman ,Santa, elf, grinch, Snowman],
  };
  const slotRef = [useRef(), useRef(), useRef()];
  // const [data, setData] = useState({});
  const [spins, setSpins] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // spin too avah requestee end
    axios.post("leaderboard", 
        {}, 
        {headers: {
          "token" : "61a78fa3180c3ee77c992c95d474351af121bc38"
        }})
      .then((res) => {
        setSpins(res.data)
        // 200-300
      })
      .catch((err) => {
        alert(err)

        setLoading(false);
        // 400<...
      })
      .finally(() => {
        setLoading(false);
      });
  },[])

  const handleSubmit = (() => {
    // if(spins < 1) {
    //   alert("No spin");
    //   return 0;
    // } 
      setLoading(true);
      // HERE
      let temp = [9,0,7];
      slotRef.forEach((slot, i) => {
        const selected = triggerSlotRotation(slot.current, temp, i);
        setValues({ [`dummy${i++}`]: selected });
      });

      setTimeout(() => {
        setLoading(false);
      }, 1000);
      // HERE

      // axios.post("/api/blabla", 
      //     {lol: 55}, 
      //     {headers: {
      //       "Authorization" : "Bearer e4hdjsahYAS321hjkfdsa"
      //     }})
      //   .then((res) => {
        // slotRef.forEach((slot, i) => {
        //   const selected = triggerSlotRotation(slot.current, res.data, i);
        //   setValues({ [`dummy${i++}`]: selected });
        // });
      //     // 200-300
      //   })
      //   .catch((err) => {
      //     alert(err)

      //     setLoading(false);
      //     // 400<...
      //   })
      //   .finally(() => {
      //     setLoading(false);
      //   });
  })
  
  const triggerSlotRotation = (ref, data, idx) => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    
    let options = ref.children;
    let randomOption = data[idx];
    let choosenOption = options[data[idx]];

  
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
    <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="w-full flex flex-col justify-between h-screen">
      <div>
        <div className='flex flex-col relative justify-center items-center'>
          <img className=' max-w-[160px]' alt="gifts" src={gifts} />
          <img alt="icons" className="max-w-[250px] tablet:max-w-[350px] absolute top-16 z-20" src={gift} />
        </div>
        <div className="relative">
          <div className="absolute  top-[93px] tablet:top-36 w-full flex justify-center items-center">
            <div className="flex justify-center items-center w-[60%] tablet:w-[75%] bg-white h-32">
              <div className="slot">
                <section>
                  <div className={loading ? "container" : 'container containerStop'} ref={slotRef[0]}>
                    {defaultProps.Dummy.map((item, idx) => (
                      <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center" key={idx}>
                          <img alt="icons" className="w-[45px] tablet:w-[67px]" src={item} />
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
                        <img alt="icons" src={item} className="w-[45px] tablet:w-[67px]" />
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
                        <img alt="icons" src={item} className="w-[45px] tablet:w-[67px]" />
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
              disabled={spins > 0 && loading}
            >
              {loading ? "эргэж байна!" : "тоглох"}
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
                            <img alt='icons' className='w-8 h-8 rounded-full' src={Santa} />
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
        <div className='w-full h-[25%] tablet:h-[38%] px-5 overflow-y-scroll'>
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
