import React, {useEffect, useState} from 'react'
import {faker} from '@faker-js/faker'
import Image from 'next/image'

interface SuggestionsType {
  id: number
  user: {
    username: string
    avatar: string
  },
  company: string
}
function Suggestions() {
  const [suggestions, setSuggestions] = useState<SuggestionsType[]>([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => (
      {
        id: i,
        user: {
          username: faker.internet.userName(),
          avatar: faker.image.avatar()
        },
        company: faker.company.name()
      }
    ))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className={'mt-4 ml-10'}>
      <div className={'flex justify-between text-sm mb-5'}>
        <h3 className={'text-sm font-bold text-gray-400'}>Suggestions for you</h3>
        <button className={'text-gray-600 font-semibold'}>SEE ALL</button>
      </div>

      {suggestions.map(p => (
        <div key={p.id} className={'flex items-center justify-between mt-3'}>
          <Image src={p.user.avatar} alt="avatar" height={50} width={50} className={'h-10 w-10 object-fit rounded-full p-[2px]'}/>

          <div className={'flex-1 ml-4'}>
            <h2 className={'font-semibold text-sm'}>{p.user.username}</h2>
            <h3 className={'text-gray-400'}>Works at {p.company}</h3>
          </div>
          <button className="text-blue-400 text-sm font-bold">Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions