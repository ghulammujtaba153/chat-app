'use client'
import React, { useState } from 'react'
import Avatar from './Avatar'
import { handleSubmit } from '@/lib/fetchers';
import { useRouter } from 'next/navigation';

const Form = () => {
    const [avatarId, setAvatarId] = useState((Math.random() * 20).toFixed());
    const router = useRouter()
  
    return (
    <form onSubmit={(e)=> handleSubmit(e, router)} className='flex flex-col gap-5'>
        <Avatar avatarId={avatarId} setAvatarId={setAvatarId}/>
        <div className='flex flex-col gap-5'>
            <label className='label'><span className='label-text text-lg'>What is your name?</span></label>
            <input type="text" placeholder='Username' className='input input-bordered w-full' />

            <label className='label'><span className='label-text text-lg'>Put your email?</span></label>
            <input type="text" placeholder='Email' className='input input-bordered w-full' />
        </div>
    </form>
  )
}

export default Form