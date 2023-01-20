import React from 'react'

interface StoryProps {
  avatar: string
  username: string
}

function Story({avatar, username}: StoryProps) {
  return (
    <div className={'group'}>
      <img src={avatar} alt="" className={'h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer group-hover:scale-110 transition transform duration-200 ease-out'}/>
      <p className={'text-xs w-14 truncate text-center'}>{username}</p>
    </div>
  )
}

export default Story