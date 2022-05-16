import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import TweetBox from './TweetBox'

function Feed() {
  return (
    <div className='col-span-7 lg:col-span-5'>
      <div className='flex items-center justify-between'>
        <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
        <RefreshIcon className="h-8 w-8 cursor-pointer text-twitter transition-all duration-500 hover:rotate-180 ease-out active:scale-125 mt-5 mr-5" />
      </div>

      <TweetBox />
    </div>
  )
}

export default Feed
