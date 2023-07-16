import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import { router } from 'next/router'; 
// import { redirect } from 'next/navigation';

function SignUp () {
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signupFirstname, setSignUpFirstname] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    
    const handleRegister = () => {
        fetch('https://hackatweet-backend-cyan.vercel.app/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signupFirstname, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
        .then( data => {
            if (data.result) {
              //res.json({ result: true, token: user.token, firstName: user.firstname, username: user.username, id: user._id });
                dispatch(login({firstname: signupFirstname, username: signUpUsername, token: data.token, id: data.id }));
                console.log("i am registered", router);
                router.push('/home')
            }
        })
    }

return(
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
          <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-600 ">
            Firstname
          </label>
          <div className="mt-2">
            <input
              onChange={(e) => setSignUpFirstname(e.target.value)} value={signupFirstname}
              id="firstname"
              name="firstname"
              type="text"
              autoComplete="firstname"
              required
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-600 ">
            Username
          </label>
          <div className="mt-2">
            <input
              onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}
              id="username"
              name="username"
              type="text"
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
              onChange={(e)=> setSignUpPassword(e.target.value)} value={signUpPassword} 
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            onClick={() => handleRegister()}
            type="button"
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-400 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>

      
    </div>
  </div>
)
    
}

export default SignUp;