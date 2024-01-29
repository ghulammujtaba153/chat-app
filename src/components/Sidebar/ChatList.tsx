"use client"
import { fetchUsers } from '@/lib/fetchers'
import { useAllUsers } from '@/store/useStore'
import { userProps } from '@/types'
import React, { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import ChatItems from './ChatItems'

const ChatList = ({mySelf}:{mySelf:userProps}) => {
    const { users, setUsers } = useAllUsers(
        (state:any) => ({ users: state.users, setUsers: state.setUsers }),
        shallow
      );
    useEffect(() => {
        const fetchData = async () => {
          await fetchUsers(mySelf, setUsers);
          console.log(users); 
        };
        fetchData();
      }, [mySelf]);

  return (
    <ul className='my-5 flex flex-col'>
        {
            users ? ( users.reverse().map((user:any)=> <ChatItems key={user._id} user={user}/>) ) : (
                <span className='loading loading-ring w-16'></span>
            )
        }
    </ul>
  )
}

export default ChatList