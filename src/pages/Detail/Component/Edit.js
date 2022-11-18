import React, {useEffect, useState} from 'react'
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
          {headers: {
            token : '61a78fa3180c3ee77c992c95d474351af121bc38',
            sessionId : "SID_5E850B8_18484BD0C9077",
          }}
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
        {headers: {
          token : '61a78fa3180c3ee77c992c95d474351af121bc38',
          sessionId : "SID_5E850B8_18484BD0C9077",
        }}
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
        {headers: {
          token : '61a78fa3180c3ee77c992c95d474351af121bc38',
          sessionId : "SID_5E850B8_18484BD0C9077",
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
        swal("Алдаа", "", "error");
    } else {
        swal("Хадгалагдлаа", "", "success");
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

    ]

  return (
    <div className='bg-mobi-pinl h-screen flex flex-col justify-between'>
        <div className='flex justify-center items-center'>
          <h1 className='text-white text-xl mt-2'>• Edit Profile •</h1>
        </div>
        <div className='px-2 w-full flex-col justify-center items-center'>
            <div className='flex flex-col justify-around items-center w-full'>
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
                                <img width={50}  src={require("../../../Assets/Icons/" + item.img)} onClick={() => handleImageClick(item.img.split('.')[0])}/>
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