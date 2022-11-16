import React, {useEffect, useState} from 'react'
import Santa from '../../../Assets/santa-claus.png'
import Elf from '../../../Assets/elf.png'
import Grinch from '../../../Assets/grinch.png'
import Snowman from '../../../Assets/snowman.png'
import {FaGift} from 'react-icons/fa'
import axios from 'axios'
import Footer from '../../Slot/component/Footer'
import swal from 'sweetalert';

const Edit = ({data, fetchData}) => {

  const [names, setNames] = useState([])

  useEffect(() => {
    axios.get("suggest/names", 
          // {
          //   params: {
          //     isdn: '99111096'
          //   }
          // },
          // {headers: {
          //   "sessionId" : "61a78fa3180c3ee77c992c95d474351af121bc38"
          // }}
          ).then(res => {
            setNames(res.data.result)
          }).catch(err => {
            console.log(err)
          }).finally(() => {
            fetchData();
          })
  }, [])

  const handleNameClick = (name) => {
    axios.post("family/profile", 
        {
            "fnfId": 3,
            "nameCode": name,
            "iconCode": data.family.iconCode
        },
        ).then(res => {
            showAlert(res.data.code)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            fetchData();
          })
  }

  const handleImageClick = (imageName) => {
    axios.post("family/profile", 
        {
            "fnfId": 3,
            "nameCode": data.family.nameCode,
            "iconCode": imageName
        },
        ).then(res => {
            showAlert(res.data.code)
        }).catch(err => {
            console.log(err)
        })
  }
  const showAlert = (code) => {
    if(code !== 'SUCCESS') {
        swal("Алдаа", "", "error");
    } else {
        swal("Хадгалагдлаа", "", "success");
    }
  }

    const imgData = [
        {
            img: "elf.png"
        },
        {
            img: "grinch.png"
        }
    ]

  return (
    <div className='bg-mobi-pinl h-screen flex flex-col justify-between'>
        <div className='flex justify-center items-center'>
          <h1 className='text-white text-xl mt-2'>• Edit Profile •</h1>
        </div>
        <div className='px-2 w-full flex-col justify-center items-center'>
            <div className='flex justify-around items-center w-full'>
                {
                    names?.map((item, idx) => {
                        return(
                            <div key={idx} className='bg-red-500 p-5 rounded-lg'>
                                <p onClick={() => handleNameClick(item)}>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-wrap flex-row justify-center mt-5 items-center px-2'>
                {
                    imgData.map((item, idx) => {
                        return(
                            <div key={idx} className='bg-red-500 ml-7 mt-2 p-5 rounded-lg'>
                                <img width={50}  src={require("../../../Assets/" + item.img)} onClick={() => handleImageClick(item.img)}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Edit