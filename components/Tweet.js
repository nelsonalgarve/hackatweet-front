import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Bars3Icon, ChevronRightIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

function Tweet (props) {

  const user = useSelector((state) => state.user.value);

console.log('props', props);


return (
   
        <li key={props.id} className="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="min-w-0 flex-auto">
            <div className="flex items-center gap-x-3">
              <div className="flex-none rounded-full p-1">
                <div className="h-2 w-2 rounded-full bg-current" />
              </div>
              <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
                <a href='/' className="flex gap-x-2">
                  <span className="truncate">{props.tweet.message}</span>
                  {/* <span className="text-gray-400">/</span> */}
                  <span className="whitespace-nowrap">{props.hashtag}</span>
                  <span className="absolute inset-0" />
                </a>
              </h2>
            </div>
            <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
              <p className="truncate">{props.user.username}</p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <p className="whitespace-nowrap">props.hashtag</p>
            </div>
          </div>
          <div
            className='rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset'
          >
            TEST
          </div>
          <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        </li>
      
)
    
}

export default Tweet;