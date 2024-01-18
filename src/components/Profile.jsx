import React from 'react'
import pic from "../Assets/media.png"
import instagram from "../Assets/instagram.png"
import facebook from "../Assets/facebook.png"
import twitter from "../Assets/twitter.png"




const Profile = () => {
  return (
    <div className='w-full bg-white text-center pb-5 rounded-xl'> 
    <img src={pic}  alt="profile picture" />

    <div className='font-semibold my-2'>john doe</div>
    <div className='font-semibold my-2'>CEO</div>

    <div className='flex items-center justify-center gap-5'>
    <img src={instagram}  alt="" />
    <img src={facebook}  alt="" />
    <img src={twitter}  alt="" />


    </div>

    </div>
  )
}

export default Profile