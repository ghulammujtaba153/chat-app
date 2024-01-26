"use client"
import { userProps } from '@/types'
import { FlashIcon } from '@/utils/icons'
import React from 'react'

const Topbar = ({selectedUser}:{selectedUser:userProps}) => {
    function handleClick(){
        document.querySelector(".messages")?.classList.add("hidden");
        document.querySelector(".sidebar")?.classList.remove("hidden");
    }
  return (
    <div className={`bg-white ${selectedUser? " " : "md:hidden"}`}>
        <div className='w-full px-10 py-3 flex justify-between items-center'>
            <div className='flex gap-3'>
                <button onClick={handleClick}>
                    <FlashIcon/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Topbar