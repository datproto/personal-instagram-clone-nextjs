import React, {useEffect, useState} from 'react'
import Post from '@/components/Post'

import {faker} from '@faker-js/faker'

function Posts(props) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const posts = [...Array(20)].map((_, i) => ({
      id: i,
      user: {
        username: faker.internet.userName(),
        avatar: faker.image.avatar()
      },
      post: {
        title: faker.lorem.words(20),
        image: faker.image.imageUrl(),
        content: faker.lorem.lines(5)
      }
    }))

    setPosts(posts)
  }, [])

  return (
    <div>
      {posts.map(p => (
        <Post key={p.id} id={p.id} username={p.user.username} avatar={p.user.avatar} postTitle={p.post.title}
              postImg={p.post.image} postContent={p.post.content}/>
      ))}
    </div>
  )
}

export default Posts