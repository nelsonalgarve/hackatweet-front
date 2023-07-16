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
        className="relative bg-gradient-to-r from-indigo-900  px-4 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-800 shadow-md

        "
      >
        <div className="flex justify-between space-x-3">
          <div className="min-w-0 flex-1">
            <a href="#" className="block focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="truncate text-sm font-medium text-white">{props.user.firstname}@{props.user.username}</p>
              <p className="truncate text-sm text-white-500">{props.hashtag}</p>
            </a>
          </div>
          <time dateTime={'21/07/2023'} className="flex-shrink-0 whitespace-nowrap text-sm text-white">
            21/07/2023
          </time>
        </div>
        <div className="mt-1">
          <p className="line-clamp-2 text-sm text-white">{props.tweet.message}</p>
        </div>
        {
          props.remove ?  <div>  
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
          </svg>
        </div> : ''

        }
       

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