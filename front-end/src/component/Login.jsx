import React from 'react'
import {useNavigate}  from 'react-router-dom'
 import GoogleLogin from "react-google-login"
 import {FcGoogle} from "react-icons/fc"
 import logo from "../assets/logowhite.png"
import share from"../assets/share.mp4" 

const Login = () => {
return (
      <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <video
            src={share}
            type="video/mp4"
            loop
            muted
            autoPlay
            controls={false}
            className="h-full w-full object-cover"
          />
          <div className="absolute flex flex-col justify-center items-center top-0 bottom-0 right-0 left-0 bg-blackOverlay">
            <div className="p-5">
              <img src={logo} width="130px" alt="" />
            </div>
            <div className="shadow-2xl">
              <GoogleLogin
                clientId="YOUR_GOOGLE_API_CLIENT_ID"
                render={(renderprops) => (
                  <button type="botton" 
                  className="bg-mainColor flex  justifly-center items-center p-3 tounded-lg cursor-pointer outline-none"
                  onClick={renderprops.onClick}
                  disabled={renderprops.disabled}
                  >
                    <FcGoogle className="mr-4" />sign in with Google
                  </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
            </div>
          </div>
        </div>
      </div>
    );
};
  
  export default Login;