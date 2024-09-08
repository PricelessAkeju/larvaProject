import React, { useState } from 'react';
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";
import myPassport from '../IMAGES/myPassport.jpg';
import larvaLogo from '../IMAGES/larvaLogo.svg';
import search from '../IMAGES/search.svg';

const StudentList = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const navigate = useNavigate();


  const Attendance = () => {
    // Your login logic here
    navigate('/attendance');
};

  const handleRegister = () => {
      // Your login logic here
      navigate('/register');
  };

  const handleStudent = () => {
    // Your login logic here
    navigate('/studentlist');
};

const handleSetting = () => {
  // Your login logic here
  navigate('/settings');
};

const handleLogOut = () => {
  // Your login logic here
  navigate('/');
};

  return (
    <div className="w-screen  h-screen absolute  bg-[#faf9f9] lg:bg-[#faf9f9]">
    {/* Head */}
    <div className="w-[1103px] pl-6 pr-9 py-4 left-[247px] top-[1px] absolute bg-white border-b border-[#e6e6e6] justify-between items-center inline-flex">
      <div className="text-[#111111] text-xl font-semibold font-['Inter']">School Attendance</div>
      <div className="justify-start items-center gap-[31px] flex">
        <div className="w-[140px] flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch text-[#333333] text-lg font-medium font-['Inter']">Akeju Tunji S.</div>
          <div className="self-stretch text-[#666666] text-sm font-medium font-['Inter']">Web Development</div>
        </div>
        <img className="w-[50px] h-[50px] rounded-full" src={myPassport} alt="Passport" />
      </div>
    </div>
      {/* ASIDE */}
      <aside className="pl-11 pr-16 pt-[37px] pb-[62.62px] left-0 top-0 absolute bg-white border-r border-[#e6e6e6] flex-col justify-start items-center inline-flex">
    <div className="self-stretch h-[681.38px] flex-col justify-start items-start gap-[287px] inline-flex">
        <img className="w-[104px] h-[37.37px]" src={larvaLogo} alt="Logo"/>

      <div className="h-[375.38px] flex-col justify-start items-start gap-[142px] font-Roboto cursor-pointer  -mt-44 lg:flex">
        <div className="self-stretch h-[196px] flex-col justify-start items-start gap-10 flex lg:flex">
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#222222] hover:text-[#cc781d] text-base font-semibold font-Roboto cursor-pointer" onClick={Attendance}>Mark Attendance</div>
          </div>
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#222222] hover:text-[#cc781d] text-base font-semibold font-Roboto cursor-pointer" onClick={handleRegister}>Register Students</div>
          </div>
          <div className="justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#222222] hover:text-[#cc781d] text-base font-semibold font-Roboto cursor-pointer" onClick={handleStudent}>Student List</div>
          </div>
          <div className="justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#222222] hover:text-[#cc781d] text-base font-semibold font-Roboto cursor-pointer" onClick={handleSetting}>Settings</div>
          </div>

          <div className="justify-start items-center lg:gap-4 inline-flex sm:mt-24">
          <div className="justify-center items-center gap-2.5 flex">
          <div className="text-[#222222] text-base font-semibold font-Roboto inline-flex"
          onClick={handleLogOut}
          >
            <MdLogout className="mr-4 mt-1" />
            Log Out
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </aside>

    <div class="h-[215px] pl-[30px] pr-[37px] py-5 left-[247px] top-[82px] absolute border-b border-[#e6e6e6] flex-col justify-start items-start gap-[29px] inline-flex">
      <div class="self-stretch  h-[70px] flex-col justify-start items-center gap-[18px] flex">
        <div class="self-stretch text-center text-[#1a1a1a] text-lg font-semibold font-Roboto">Students List</div>
        <div class="self-stretch  justify-start items-center gap-[54px] inline-flex">
          <div class="h-[51px]  pl-4 pr-2.5 py-4 bg-white rounded-[10px] border border-[#e9e9e9] justify-start items-center gap-2.5 flex">
          <img src={search} className="text-2xl text-[#9b9a9a] font-bold"/>
          <input className="h-[15px] md:w-[] lg:h-[40px] w-[30px] md:w[] lg:w-[980px] text-[#181818] text-base font-medium font-Roboto focus:border-none outline-none" 
          type="text" 
          placeholder="Search" 
          />
            
          </div>
        </div>
      </div>
      <div class="justify-center mt-6 items-center inline-flex">
        <div class="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-6 inline-flex">
          <div class="w-[1127px] justify-start items-center gap-[103px] inline-flex">
          <div className="px-3.5 py-[18px] h-[50px] bg-white rounded shadow justify-center items-center gap-16 flex"
          onClick={() => setShowCalendar(true)}
          >
            <p className="w-[109px] text-[#2c2c2c] text-base font-semibold font-Roboto">Date Selector</p>
            <FaCaretDown className="text-2xl text-[#cc781d] font-bold"/>
            
          </div>
          
          <div className="px-3.5 py-[18px]  h-[50px] bg-white rounded shadow justify-center items-center gap-16 flex">
            <p className="text-[#2c2c2c] text-base font-semibold font-Roboto">Select Course</p>
            <FaCaretDown className="text-2xl text-[#cc781d] font-bold"/>
          </div>

          <div className="px-3.5 py-[18px]  h-[50px] bg-white rounded shadow justify-center items-center gap-16 flex">
            <p className="text-[#2c2c2c] text-base font-semibold font-Roboto">Select Cohort</p>
            <FaCaretDown className="text-2xl text-[#cc781d] font-bold"/>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[1123px] px-6 left-[277px] top-[325px] absolute justify-between items-center inline-flex">
      <div class="w-[129px] flex-col justify-start items-start gap-6 inline-flex">
        <div class="self-stretch text-[#222222] text-base font-semibold font-['Inter']">Name</div>
        <div class="self-stretch h-[369px] flex-col justify-start items-start gap-4 flex">
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Ayantoye David</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Ayantoye David</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Ife Adelelke</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Ife Adelelke</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Ife Adelelke</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">James Jerry</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">James Jerry</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">James Jerry</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">James Jerry</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Josh Graham</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Olamide </div>
        </div>
      </div>
      <div class="w-[142px] flex-col justify-start items-start gap-6 inline-flex">
        <div class="self-stretch text-[#222222] text-base font-semibold font-['Inter']">Course</div>
        <div class="self-stretch h-[369px] flex-col justify-start items-start gap-4 flex">
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Web Development</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Web Development</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Web Development</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">UIUX Design</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">UIUX Design</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">UIUX Design</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Data Analysis</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Cyber Security</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Web Development</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Web Development</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Web Development</div>
        </div>
      </div>
      <div class="w-[55px] flex-col justify-start items-start gap-6 inline-flex">
        <div class="self-stretch text-[#222222] text-base font-semibold font-['Inter']">Cohort</div>
        <div class="h-[369px] flex-col justify-start items-start gap-4 flex">
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">2</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">1</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">1</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">1</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">1</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">1</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">3</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">3</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">3</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">2</div>
          <div class="self-stretch text-[#666666] text-base font-semibold font-['Inter']">2</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StudentList