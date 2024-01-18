import React from 'react'
import image from "../Assets/media.png"

const ProfileTop = () => {
  return (
    <div className=' bg-white flex p-3 gap-2 rounded-xl text-sm font-normal cursor-pointer '>
        <div>
            <div className='font-semibold'>John doe</div>
            <div >John@doe.com</div>

        </div>
        <img className='rounded-lg ' height={40} width={40} src={image} alt="profile" />
    </div>
  )
}

export default ProfileTop