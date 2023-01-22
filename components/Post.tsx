import React, {useEffect, useState} from 'react'

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
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query, QueryDocumentSnapshot,
  serverTimestamp,
  setDoc
} from '@firebase/firestore'
import {db} from '@/firebase'
import Moment from 'react-moment'
import Image from 'next/image'

interface PostType {
  id: string
  username: string
  avatar: string
  postTitle: string
  postImg: string
  postContent: string
}

function Post({id, username, avatar, postTitle, postImg, postContent}: PostType) {
  const {data: session} = useSession()
  const [cmt, setCmt] = useState('')
  const [cmts, setCmts] = useState<QueryDocumentSnapshot[]>([])
  const [likes, setLikes] = useState<QueryDocumentSnapshot[]>([])
  const [hasLiked, setHasLiked] = useState(false)

  console.log(session)

  useEffect(() => onSnapshot(
    query(
      collection(
        db, 'posts', id, 'comments'),
      orderBy('timestamp', 'desc')),
      snapshot => setCmts((snapshot.docs))
    ), [db, id])

  useEffect(() => onSnapshot(
    collection(db, 'posts', id, 'likes'), snapshot => setLikes(snapshot.docs)
  ), [db, id])

  useEffect(() => {
    setHasLiked(
      likes.findIndex(like => {
        return like.id === session?.user?.uid
      }) !== -1
    )
  }, [likes])

  const likePost = async() => {
    if (hasLiked) {
      if (session) {
        await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
      }
    } else {
      if (session) {
        await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
          username: session.user.username
        })
      }
    }
  }

  const sentCmt = async (e) => {
    e.preventDefault()

    const cmtToSend = cmt
    setCmt('')

    if ('user' in session) {
      await addDoc(collection(db, 'posts', id, 'comments'),
        {
          comment: cmtToSend,
          username: session.user.username,
          userImage: session.user.image,
          timestamp: serverTimestamp()
        })
    }
  }

  return (
    <div className={'bg-white my-7 border rounded-sm'}>
      {/*Header*/}
      <div className={'flex items-center p-5'}>
        <Image src={avatar} alt="avatar" width={50} height={50} className={'rounded-full h-12 w-12 object-cover border p-1 mr-3'}/>
        <p className={'flex-1 font-bold'}>{username}</p>

        <EllipsisHorizontalIcon className={'h-5'}/>
      </div>

      {/* Image */}
      <img src={postImg} alt="post-image" className={'w-full object-cover'}/>

      {session && (
        <div className={'flex justify-between px-4 pt-4'}>
          <div className={'flex space-x-4'}>
            {
              hasLiked ? (
                <HeartSolidIcon onClick={likePost} className={'btn text-red-500'}/>
              ) : (
                <HeartIcon onClick={likePost} className={'btn'}/>
              )
            }
            <ChatBubbleLeftIcon className={'btn'}/>
            <PaperAirplaneIcon className={'btn'}/>
          </div>

          <BookmarkIcon className={'btn'}/>
        </div>
      )}

      {/* Caption */}
      <div className={'p-5 truncate'}>
        {likes.length > 0 && (
          <p className={'font-bold mb-1'}>{likes.length} likes</p>
        )}

        <span className={'font-bold'}>{username} </span>{postTitle}
      </div>

      {/* Comments */}
      {cmts.length > 0 && (
        <div className={'ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'}>
          {cmts.map(c => (
            <div key={c.id} className={'flex items-center space-x-2 mb-3'}>
              <Image src={c.data().userImage} alt='' width={50} height={50} className={'h-7 w-7 object-fit rounded-full'}/>
              <p className={'text-sm flex-1'}>
                <span className={'font-bold'}>{c.data().username}</span>{' '}{c.data().comment}
              </p>

              <Moment fromNow className={'text-xs pr-5'}>
                {c.data().timestamp && c.data().timestamp.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* Input Box */}
      {session && (
        <form className={'flex items-center p-4'}>
          <FaceSmileIcon className={'h-7'}/>
          <input type="text" placeholder={'Add a comment ...'} className={'border-none flex-1 focus:ring-0'} value={cmt}
                 onChange={e => setCmt(e.target.value)}/>
          <button type={'submit'} className={'font-semibold text-blue-400'} disabled={!cmt.trim()}
                  onClick={sentCmt}>Post
          </button>
        </form>
      )}

    </div>
  )
}

export default Post