import React from 'react'

import {
  BookmarkIcon,
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  HeartIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline'
import {
  HeartIcon as HeartSolidIcon
} from '@heroicons/react/24/solid'
import {useSession} from 'next-auth/react'

interface PostType {
  id: number
  username: string
  avatar: string
  postTitle: string
  postImg: string
  postContent: string
}

function Post({id, username, avatar, postTitle, postImg, postContent}: PostType) {
  const {data: session} = useSession()

  return (
    <div className={'bg-white my-7 border rounded-sm'}>
      {/*Header*/}
      <div className={'flex items-center p-5'}>
        <img src={avatar} alt='avatar' className={'rounded-full h-12 w-12 border p-1 mr-3'}/>
        <p className={'flex-1 font-bold'}>{username}</p>

        <EllipsisHorizontalIcon className={'h-5'}/>
      </div>

      {/* Image */}
      <img src={postImg} alt="post-image" className={'w-full object-cover'}/>

      {session && (
        <div className={'flex justify-between px-4 pt-4'}>
        <div className={'flex space-x-4'}>
        <HeartIcon className={'btn'} />
        <ChatBubbleLeftIcon className={'btn'} />
        <PaperAirplaneIcon className={'btn'} />
        </div>

        <BookmarkIcon className={'btn'} />
        </div>
      )}

      {/* Caption */}
      <p className={'p-5 truncate'}>
        <span>{username} </span>{postTitle}
      </p>

      {/* Comments */}

      {/* Input Box */}
      {session && (
        <form className={'flex items-center p-4'}>
          <FaceSmileIcon className={'h-7'} />
          <input type="text" placeholder={'Add a comment ...'} className={'border-none flex-1 focus:ring-0'} />
          <button className={'font-semibold text-blue-400'}>Post</button>
        </form>
      )}

    </div>
  )
}

export default Post