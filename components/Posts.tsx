import React, {useEffect, useState} from 'react'
import Post from '@/components/Post'

import {faker} from '@faker-js/faker'
import {collection, onSnapshot, orderBy, query} from '@firebase/firestore'
import {db} from '@/firebase'

function Posts() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
      setPosts(snapshot.docs)
    })
  }, [db])

  return (
    <div>
      {posts.map(p => (
        <Post key={p.id} id={p.id} username={p.data().username} avatar={p.data().profileImg} postTitle={p.data().caption}
              postImg={p.data().image} postContent='Random'/>
      ))}
    </div>
  )
}

export default Posts