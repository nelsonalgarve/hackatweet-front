import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import { redirect } from 'next/navigation';
import { router } from 'next/router';

function Signin() {
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    const [signInUsername, setSignInUsername] = useState('');
    const [signInFirstname, setSignInFirstname] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const handleConnection = (e) => {
        fetch('https://hackatweet-backend-cyan.vercel.app/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then( data => {
                if (data.result) {
                   dispatch(login({firstname: data.firstname, username: signInUsername, token: data.token, id: data.userId }));
                    console.log("i am connected", user)// return <Home />
                    if (user.token) (
                      router.push('/home')
                    )
                  }
            })
    }

    const handleLogout = () => {
        dispatch(logout());
        console.log("i am logged out", user);
    }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  ">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-60 w-auto"
        src="AdobeStock_607848635.png"
        alt="Hackatweet"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-600 ">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-600 ">
            Username
          </label>
          <div className="mt-2">
            <input
              onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername}
              id="username"
              name="username"
              type="username"
              autoComplete="username"
              required
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-600 ">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            onClick={() => handleConnection()}
            type="button"
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>

      
    </div>
  </div>
  )
    
  
}


export default Signin;