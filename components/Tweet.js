import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Bars3Icon, ChevronRightIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

function Tweet (props) {

const user = useSelector((state) => state.user.value);

// useEffect(() => {
//   fetch('https://hackatweet-backend-cyan.vercel.app/tweets/tweets')
//   .then(response => response.json())
//   .then(data => {
//     console.log('from useEffect', data.tweets);
//     setTweets(data.tweets)
//   })
// },[submit])


 return (
  <ul role="list" className="divide-y divide-gray-200">
    
      <li
        key={props.id}
        className="relative bg-white px-4 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50"
      >
        <div className="flex justify-between space-x-3">
          <div className="min-w-0 flex-1">
            <a href="#" className="block focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="truncate text-sm font-medium text-gray-900">{props.user.firstname}@{props.user.username}</p>
              <p className="truncate text-sm text-gray-500">{props.hashtag}</p>
            </a>
          </div>
          <time dateTime={'21/07/2023'} className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
            21/07/2023
          </time>
        </div>
        <div className="mt-1">
          <p className="line-clamp-2 text-sm text-gray-600">{props.tweet.message}</p>
        </div>
      </li>
  
  </ul>
)

// (

//   <ul role="list" className="divide-y divide-gray-800">

//     <li key={props.id} className="flex  gap-x-6 py-5">
//       <div className="flex gap-x-4">
//         <img className="h-12 w-12 flex-none rounded-full bg-gray-800" src={"AdobeStock_607848635.png"} alt="" />
//         <div className="min-w-0 flex-auto">
//           <p className="text-sm font-semibold leading-6 text-white">{props.user.fisrtame}</p>
//           <p className="mt-1  text-xs leading-5 text-gray-400">@{props.user.username}</p>
//         </div>
//       </div>
//       <div className=" sm:flex sm:flex-column sm:items-end px-1">
//         <p className="text-sm leading-6 text-white">{props.tweet.message}</p>
//         {/* {person.lastSeen ? (
//           <p className="mt-1 text-xs leading-5 text-gray-400">
//             Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
//           </p>
//         ) : ( */}
//         { user.token ? (
//           <div className="mt-1 flex items-center gap-x-1.5 self-end ">
//             <div className="flex-none rounded-full bg-emerald-500/20 p-1">
//               <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//             </div>
//             <p className="text-xs leading-5 text-gray-400">Online</p>
//           </div>

//         ): <div className="mt-1 flex items-center gap-x-1.5">
//         <div className="flex-none rounded-full bg-emerald-500/20 p-1">
//           <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/20" />
//         </div>
//         <p className="text-xs leading-5 text-gray-400">Offline</p>
//       </div>}
//       </div>
//     </li>
// </ul>
// )
   
        // <li key={props.id} className="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8">
        //   <div className="min-w-0 flex-auto">
        //     <div className="flex items-center gap-x-3">
        //       <div className="flex-none rounded-full p-1">
        //         <div className="h-2 w-2 rounded-full bg-current" />
        //       </div>
        //       <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
        //         <a href='/' className="flex gap-x-2">
        //           <span className="truncate">{props.tweet.message}</span>
        //           {/* <span className="text-gray-400">/</span> */}
        //           <span className="whitespace-nowrap">{props.hashtag}</span>
        //           <span className="absolute inset-0" />
        //         </a>
        //       </h2>
        //     </div>
        //     <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
        //       <p className="truncate">{props.user.username}</p>
        //       <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300">
        //         <circle cx={1} cy={1} r={1} />
        //       </svg>
        //       <p className="whitespace-nowrap">props.hashtag</p>
        //     </div>
        //   </div>
        //   <div
        //     className='rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset'
        //   >
        //     TEST
        //   </div>
        //   <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        // </li>
      

    
}

export default Tweet;