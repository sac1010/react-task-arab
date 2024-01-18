import React from 'react'
import suitcase from "../Assets/Briefcase.png"
import statboard from "../Assets/StatBoard.png"
import dash from "../Assets/Circled Menu.png"
import support from "../Assets/Support.png"
import plugin from "../Assets/Puzzle.png"
import help from "../Assets/Help.png"
import logout from "../Assets/Shutdown.png"

const items = [{text:"Dashboard", logo:dash},{text:"Support", logo:support},{text:"Plugins", logo:plugin},{text:"Help", logo:help}]

const Sidebar = () => {
  return (
    <div className='bg-[#171c42] h-screen flex flex-col justify-between'> 
    
    <div className='flex justify-center items-center flex-col pt-20'>
      <img width={100} height={100} src={suitcase} alt="logo" />
      <img width={100}  src={statboard} alt="logo" />

    </div>
    <div className='flex flex-col gap-5 text-right w-full items-end -translate-y-14'>{items.map((item, i)=>{
      return(
        <div key={item.text} className={`${i==0?"bg-white text-black":"bg-[#0c1030] text-white"}  w-[80%] flex items-center py-3 rounded-l-lg font-semibold  pl-14 gap-2  cursor-pointer`}>
          <img width={20} height={20} src={item.logo} alt="logo" />
          <div className=''>{item.text}</div>
        </div>
      )
    })}</div>
    <div className='w-full bg-white h-10 text-red-600 flex gap-1 items-center justify-center'> 
    <div>Logout</div>
    <img width={20} height={20} src={logout} alt="logo" />
    </div>

    </div>
  )
}

export default Sidebar