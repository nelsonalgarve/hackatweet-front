import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/user';
// import { canDelete, noDelete } from '../reducers/canDelete';
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import Tweet from '../components/Tweet';
import { router } from 'next/router'; 
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Bars3Icon, ChevronRightIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

function Home() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [submit, setSubmit]   = useState(false);
  const [tweets, setTweets]   = useState([]);
  // const [canRemove, setCanremove] = useState([]);
  
  // const canDelete = useSelector((state) => state.delete.value); 
  console.log(user);

// Loading homepage
  useEffect(() => {
    if (!user.token) {
        router.push('/')
    }
    setSubmit(true);
  fetch('https://hackatweet-backend-cyan.vercel.app/tweets/tweets')
  .then(response => response.json())
  .then(data => {
    setTweets(data.tweets)
    setSubmit(false);
  })
},[submit])

const deleteTweet = (tweet) => {
  console.log('deleteTweet-home.js', tweet);
  fetch('https://hackatweet-backend-cyan.vercel.app/tweets/tweet', {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ hashtag: tweet}),
})
  .then(res => res.json())
  .then(data => {
      console.log(data);
      setSubmit(true);
  })
  .catch(err => console.log(err));
}

// logout
const handleClickLogout = (() => {
  dispatch(logout());
  router.push('/')
})

const tweetList = tweets.map((tweet) => {
      let canRemove = false;
   if( tweet.user._id === user.id) {
      canRemove = true;
   }
  return <Tweet  key={tweet._id} {...tweet} remove={canRemove} deleteTweet={deleteTweet}/>
})
console.log('tweet List', tweetList);


const handleMessage = () => {
  
  if (user.token){
  fetch('https://hackatweet-backend-cyan.vercel.app/tweets/tweet', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ message: message, userId: user.id}),
}).then(response => response.json())
.then( data => {
    if (data.result) {
        console.log("Tweet Saved", data);
        setMessage('');
        setSubmit(true);
    }
  })
}}



  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 xl:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10">
                    {/* <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="6790689621642398013.svg"
                        alt="Your Company"
                      />
                    </div> */}
                    <nav className="flex flex-1 flex-col">
                      
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
            <div className="flex h-16 shrink-0 items-center p-2 m-4">
              <img
                className="h-22 w-auto transform -scale-x-100"
                src="AdobeStock_607848635.png"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                  <li>teest</li>
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                   
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-gray-800"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">{user.firstname}</span>
                  </a>
                   <button
                      onClick={()=> handleClickLogout()}
                      type="button"
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Logout
                    </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="xl:pl-72">
          {/* Sticky search header */}
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-white xl:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  What????
                </label>
                <div className="relative w-full">
                  {/* <MagnifyingGlassIcon
                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500"
                    aria-hidden="true"
                  /> */}
                  <input
                    id="search-field"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm"
                    placeholder="What????"
                    type="text"
                    name="message"
                  />
        
                </div>
              </div>
            </div>
          </div>

          <main className="lg:pr-96">
            <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
              <h1 className="text-base font-semibold leading-7 text-white">Tweets</h1>

              {/* Sort dropdown */}
              <Menu as="div" className="relative">
              <button
                    onClick={() => handleMessage()}
                    type="button"
                    className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-400 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                   Send
                 </button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Name
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Date updated
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Environment
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </header>

            {/* Deployment list */}
            <ul role="list" className="divide-y divide-white/5">
              {tweetList}
            </ul>
          </main>

          {/* Activity feed */}
          <aside className="bg-black/10 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5">
            <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
              <h2 className="text-base font-semibold leading-7 text-white">Trends</h2>
              <a href="#" className="text-sm font-semibold leading-6 text-indigo-400">
                View all
              </a>
            </header>
            <ul role="list" className="divide-y divide-white/5">
               <p className='text-white'>TRENDS HASHTAGS</p>
            </ul>
          </aside>
        </div>
      </div>
    </>
  )
}


export default Home;
