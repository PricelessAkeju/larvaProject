import React from 'react';
import { useNavigate } from 'react-router-dom';
import passwordIcon from '../IMAGES/passwordicon.svg'
import emailIcon from '../IMAGES/emailIcon.svg'
import larvaLogo from '../IMAGES/larvaLogo.svg'
import bigPix from '../IMAGES/bigPix.svg'
// import { MdOutlineEmail } from "react-icons/md";
// import { IoMdLock } from "react-icons/io";

const Login = () => {
 
    const navigate = useNavigate();

    const handleLogin = () => {
        // Your login logic here
        navigate('/attendance');
    };

  return (
    <div class="w-full h-[600px] cursor-pointer pl-[131px] bg-white justify-end items-center gap-[172px] inline-flex">
  <div class="w-[417px] self-stretch flex-col justify-start items-start gap-[52px] inline-flex">
    <div class="h-[97.68px] cursor-pointer flex-col justify-start items-start gap-[19.07px] mt-20 flex">
      <img src={larvaLogo} alt=''/>
      <div class="self-stretch text-[#111111] cursor-pointer text-2xl font-semibold font-Roboto">Log in to your Account</div>
    </div>
    <div class="self-stretch h-[321px] flex-col justify-start items-start gap-[52px] flex">
      <div class="h-[135px] w-full flex-col justify-start items-end gap-6 flex">
        <div class="self-stretch h-[135px] flex-col justify-start items-start gap-6 flex">
          <div class=" h-[55px] w-[400px] pl-[17px] pr-2.5 py-[18px] bg-[#f8f8f8] rounded-[10px] border border-[#d3d3d3] justify-start items-center gap-3 inline-flex">
            <img src={emailIcon} alt='' />
            <input class="text-[#afafaf] text-base font-medium font-Roboto w-full outline-none" placeholder='Email'/>
          </div>
          <div class="h-[55px] w-[400px] pl-[17px] pr-2.5 py-[18px] bg-[#f8f8f8] rounded-[10px] border border-[#d3d3d3] justify-start items-center gap-3 inline-flex">
          <img src={passwordIcon} alt='' />
            <input class="text-[#afafaf] text-base font-medium font-Roboto w-full outline-none"placeholder='Password'/>
          </div>
        </div>
      </div>
      <div class="h-[134px] flex-col justify-start items-start gap-[18px] flex">
        <div class="h-[55px] w-[400px] px-2.5 py-[18px] bg-[#f39b3b] rounded-[10px] justify-center items-center gap-2.5 inline-flex"
        onClick={handleLogin}>
          <button class="text-white text-lg font-semibold font-Roboto ">Log In as Tutor</button>
        </div>
        <div class="h-[55px] w-[400px] px-2.5 py-[18px] bg-[#1e1205] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
          <button class="text-white text-lg font-semibold font-Roboto ">Log In as Super Admin</button>
        </div>
      </div>
    </div>
  </div>
  <img src={bigPix} className='mt-1' alt='' />
</div>
  )
}

export default Login