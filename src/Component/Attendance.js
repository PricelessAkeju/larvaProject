import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import search from '../IMAGES/search.svg';
import { LuListFilter } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import myPassport from '../IMAGES/myPassport.jpg'
import larvaLogo from '../IMAGES/larvaLogo.svg'

const Attendance = () => {

  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const navigate = useNavigate();


  const handleAttendance = () => {
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
        <div className="w-[375px] lg:w-[1300px] h-full lg:h-[500px] relative bg-[#faf9f9] lg:bg-[#faf9f9]">
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
            <div className="text-[#222222] hover:text-[#cc781d] text-base font-semibold font-Roboto cursor-pointer" onClick={handleAttendance}>Mark Attendance</div>
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

      {/* Serch and Date aspect line */}
  <div className="w-[1103px] h-[215px] pl-[30px] pr-[37px] py-5 left-[247px] top-[82px] absolute border-b border-[#e6e6e6] flex-col justify-start items-start gap-[29px] inline-flex">
    <div className="self-stretch h-[91px] flex-col justify-start items-center gap-[18px] flex">
      <div className="self-stretch text-center text-[#1a1a1a] text-lg font-semibold font-['Inter']">Mark Attendance</div>
      <div className="self-stretch justify-start items-center gap-[54px] inline-flex">
        <div className="h-[15px] md:w-[] lg:h-[49px] w-[20px] md:w[] lg:w-[940px] pl-5 pr-2.5 py-4 bg-white rounded-[10px] border border-[#e9e9e9] justify-start items-center gap-2.5 flex">
          <img src={search} className="text-2xl text-[#9b9a9a] font-bold"/>
          <input className="h-[15px] md:w-[] lg:h-[40px] w-[20px] md:w[] lg:w-[890px] text-[#181818] text-base font-medium font-['Inter'] focus:border-none outline-none" 
          type="text" 
          placeholder="Search" 
          />
        </div>
        <LuListFilter className="text-2xl text-[#cc781d] font-bold"/>
      </div>
    </div>

    <div className="justify-center items-center flex">
        <div className="w-[1000px] justify-between items-center inline-flex">
          <div className="px-3.5 py-[18px] bg-white rounded shadow justify-center items-center gap-16 flex"
          onClick={() => setShowCalendar(true)}
          >
            <p className="w-[109px] text-[#2c2c2c] text-base font-semibold font-['Inter']">Date Selector</p>
            <FaCaretDown className="text-2xl text-[#cc781d] font-bold"/>
            
          </div>
          
          <div className="px-3.5 py-[18px] bg-white rounded shadow justify-center items-center gap-16 flex">
            <p className="text-[#2c2c2c] text-base font-semibold font-['Inter']">Select Course</p>
            <FaCaretDown className="text-2xl text-[#cc781d] font-bold"/>
          </div>

          <div className="px-3.5 py-[18px] bg-white rounded shadow justify-center items-center gap-16 flex">
            <p className="text-[#2c2c2c] text-base font-semibold font-['Inter']">Select Cohort</p>
            <FaCaretDown className="text-2xl text-[#cc781d] font-bold"/>
          </div>
          <div className="px-3.5 py-[18px] bg-white rounded shadow justify-center items-center gap-16 flex">
            <p className="text-[#2c2c2c] text-base font-semibold font-['Inter']">Bulk Action</p>
            <FaCaretDown className="text-2xl text-[#cc781d] font-bold"/>
          </div>
        </div>
    </div>

        <span>
          {showCalendar && (
                <Calendar
                  value={date}
                  onChange={setDate}
                  onClickDay={() => setShowCalendar(false)}
                />
              )}
        </span>
  </div>
</div>



  )
}

export default Attendance