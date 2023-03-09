import React from 'react'
import {LockClosedIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wed from "./images/wednesdayBlack.png"
function Signup() {
    let navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [mobile,setMobile]=useState("");


    const handleSignup= async(e)=>{
        e.preventDefault();

        if(document.getElementById("email").value.length===0){
            window.alert("Please enter your email address");
            return;
        }
        if(document.getElementById("password").value.length<5){
            window.alert("Please enter your password of at least 5 words");
            return;
        }
        if(document.getElementById("mobile").value.length!=10){
          window.alert("Please enter your Mobile number correctly");
          return;
      }


        const response= await fetch("http://localhost:5000/signup",{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({email,password,mobile})
        });
        const json= await response.json();
        if(json.status===200){
          // const code=window.prompt("Enter OTP")
          // const response1=await fetch("http://localhost:3000/verify",{
          //   method:"POST",
          //   headers:{
          //     'Content-type':'application/json'
          //   },
          //   body: JSON.stringify({mobile,email,code})
          // });
          // const json1=await response1.json();
          // if(json1.status===200){
            sessionStorage.setItem('token', json.authToken);
            navigate('/home')
          // }
          // else{
          //   window.alert("Please, Enter the correct OTP");
          // }

         
        }

        else{
            window.alert("Account already exist with this Email ID")
        }
        


    }

  return (
    <>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              style={{height:"180px",width:"220px",marginBottom:"-5%"}}
              className="mx-auto h-12 w-auto"
              src={wed}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Already have an account, Sign In
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="number"
                  required
                  className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Mobile Number"
                  onChange={(e)=>setMobile(e.target.value)}
                  style={{marginTop:"10px",borderRadius:"5px"}}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                
              </div>
            </div>

            <div>
              <button
                onClick={handleSignup}
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup