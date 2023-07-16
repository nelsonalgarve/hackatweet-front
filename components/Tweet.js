import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Bars3Icon, ChevronRightIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

function Tweet (props) {

const user = useSelector((state) => state.user.value);
console.log(props.hashtag);

  const handleClickDelete = () => {
    console.log("handleClickDelete", props.hashtag);
    props.deleteTweet(props.hashtag);
  }


 return (
  <ul role="list" className="divide-y divide-gray-200">
      <li
        key={props.id}
        className="relative bg-gradient-to-r from-indigo-900  px-4 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-800 shadow-md">
        
        <div className="flex justify-between space-x-3">
          <div className="min-w-0 flex-1">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="truncate text-sm font-medium text-white">{props.user.firstname}@{props.user.username}</p>
              <p className="truncate text-sm text-indigo-400">{props.hashtag}</p>
          </div>
          <time dateTime={'21/07/2023'} className="flex-shrink-0 whitespace-nowrap text-sm text-white">
            21/07/2023
          </time>
        </div>
        <div className="mt-1">
          <p className="line-clamp-2 text-sm text-white">{props.tweet.message}</p>
        </div>
      </li>
        {props.remove ? 
        <div>  
          <button type="button" onClick={() => handleClickDelete()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
          </button>
        </div> : ''
        }
  </ul>
)

}

export default Tweet;
