import React, {useEffect, useState} from 'react'
import {faker} from '@faker-js/faker'
import Story from '@/components/Story'

function Stories(props) {

  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      id: i,
      name: faker.name.fullName(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
      company: {name: faker.company.name()},
      phone: faker.phone.number(),
      website: faker.internet.url()
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className={'flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'}>
      {suggestions.map(profile => (
        <Story
          key={profile.id}
          avatar={profile.avatar}
          username={profile.username}
        />
      ))}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  )
}

export default Stories