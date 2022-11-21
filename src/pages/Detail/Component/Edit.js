import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Footer from '../../Slot/component/Footer'
import Swal from 'sweetalert2'
import gifts from "../../../Assets/text.png";
import back from '../../../Assets/back.jpg'
// import {FaCheckCircle} from 'react-icons/fa'

const Edit = ({data, fetchData, sessionId}) => {

  const [names, setNames] = useState([])
  const [selectedName, setSelectedName] = useState(data?.family?.nameCodeiconCode || '');
  const [selectedImage, setSelectedImage] = useState(data?.family?.iconCode || '');
  const [active, setActive] = useState(false)

  useEffect(() => {
    axios.get("/api/suggest/names",
          {headers: {
            sessionId : sessionId
          }}
          ).then(res => {
            setNames(res.data.result)
          }).catch(err => {
            console.log(err)
          }).finally(() => {
            fetchData();
          })
  }, [sessionId])

  const handleChange = () => { 
    setActive(!active)
  }; 

  const handleSubmit = () => {
    axios.post("api/family/profile", 
        {
            "fnfId": 3,
            "nameCode": selectedName,
            "iconCode": selectedImage
        },
        {headers: {
          sessionId : sessionId
        }}
        ).then(res => {
            showAlert(res.data.code)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            fetchData();
          })
  }

  const showAlert = (code) => {
    if(code !== 'SUCCESS') {
        Swal.fire({
            imageUrl: `${gifts}`,
            imageHeight: 100,
            title: (`Алдаа гарлаа`),
            width: 600,
            color: '#FFFFFF',
            showConfirmButton: true,
            confirmButtonColor: '#ef4444',
            background: `url(${back})`,
          })
    } else {
        Swal.fire({
            imageUrl: `${gifts}`,
            imageHeight: 100,
            title: (`Хадгалагдлаа`),
            width: 600,
            color: '#FFFFFF',
            showConfirmButton: true,
            confirmButtonColor: '#ef4444',
            background: `url(${back})`,
          })
    }
  }

    const imgData = [
        {
            img: "BUNNY.png"
        },
        {
            img: "FAMILY.png"
        },
        {
            img: "FRIENDS.png"
        },
        {
            img: "GIRLS.png"
        },
        {
            img: "BOYS.png"
        },
        {
            img: "MobiTest.png"
        },
        {
            img: "DEFAULT_ICON.png"
        },
        {
            img: "DEFAULT_ICON.png"
        },
        {
            img: "DEFAULT_ICON.png"
        },
        {
            img: "DEFAULT_ICON.png"
        },
        {
            img: "DEFAULT_ICON.png"
        },
        {
            img: "DEFAULT_ICON.png"
        },
    ]

  return (
    <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='h-screen flex flex-col justify-between'>
        <div className='flex justify-center items-center'>
          <h1 className='text-white text-xl mt-2'>• Edit Profile •</h1>
        </div>
        <div className='px-2 w-full flex-col justify-around items-center'>
            <div className='flex flex-col px-2 justify-start'>
                <p className='text-left text-white'>Нэр сонгох</p>
                <div className='border-b border-white pb-3 w-[90%]' />
            </div>
            <div className='flex flex-wrap justify-around items-center w-full'>
                {
                    names?.map((item, idx) => {
                        return(
                            <div key={idx} className={` active:bg-red-500 transition-all duration-200 active:text-white focus:outline-none focus:ring focus:ring-violet-300 mt-3 p-3 rounded-lg bg-white`}>
                                <p className={''} onChange={handleChange} onClick={() => setSelectedName(item)}>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        <div className='flex flex-col px-2 mt-5 justify-start'>
            <p className='text-left text-white'>Зураг сонгох</p>
            <div className='border-b border-white pb-3 w-[90%]' />
        </div>
            <div className='flex flex-wrap flex-row justify-center mt-5 items-center px-2 w-full'>
                {
                    imgData.map((item, idx) => {
                        return(
                            <div key={idx} className='active:bg-red-500 transition-all duration-200 focus:outline-none focus:ring focus:ring-violet-200  bg-white mt-2 ml-2 p-3 rounded-lg'>
                                <img width={50}  src={require("../../../Assets/Icons/" + item.img)}  onClick={() => setSelectedImage(item.img.split('.')[0])}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <div className='bg-red-500 text-white w-[60%] p-3 rounded-md flex justify-center items-center' onClick={() => handleSubmit()}>
                Хадгалах
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Edit