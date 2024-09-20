import React, {useState} from 'react'
import axios from 'axios'
import larvaLogo from '../IMAGES/larvaLogo.svg'
import myPassport from '../IMAGES/myPassport.jpg'
import imageIcon from '../IMAGES/imageIcon.svg'
import { useNavigate } from 'react-router-dom';
import { MdLogout } from "react-icons/md";

const Register = () => {

  const[valueForm, setValueForm] = useState({
    name: '',
    StudentNumber: '',
   Course: '',
    Cohort: '',
    
});

const handleChange = (e)=> {
    const {name,value} = e.target
    setValueForm({...valueForm, [name]: value})
}

const handleSubmit = async (e)=> {
    e.preventDefault()
    try{
        await axios.post('', valueForm)
        console.log('Student Added Successfully')
       
    }catch(error){
        console.error(error)
    }
}

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
const handleDashboard = () => {
  // Your login logic here
  navigate('/');
};
  return (
    <div class="w-screen h-screen relative bg-[#faf9f9]">
  <div class="w-[1193px] pl-6 pr-9 py-4 left-[247px] top-[1px] absolute bg-white border-b border-[#e6e6e6] justify-between items-center inline-flex">
    <div class="text-[#111111] text-xl font-semibold font-['Inter']">School Attendance</div>
    <div class="justify-start items-center gap-[31px] flex">
      <div class="w-[140px] flex-col justify-start items-start gap-2 inline-flex">
        <div class="self-stretch text-[#333333] text-lg font-medium font-['Inter']">Akeju Tunji S.</div>
        <div class="self-stretch text-[#666666] text-sm font-medium font-['Inter']">Web Development</div>
      </div>
      <img class="w-[50px] h-[50px] rounded-full" src={myPassport} alt='pasport' />
    </div>
  </div>
     {/* ASIDE */}
     <aside className="w-[247px] pl-11 pr-16 pt-[37px] pb-[62.62px] left-0 top-0 absolute bg-white border-r border-[#e6e6e6] flex-col justify-start items-center inline-flex">
    <div className="self-stretch h-[681.38px] flex-col justify-start items-start gap-[287px] inline-flex">
        <img className="w-[104px] h-[37.37px]" src={larvaLogo} alt="Logo" onClick={handleDashboard}/>

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
  <div class="w-[1103px] h-[70px] pl-[30px] pr-[37px] py-5 left-[247px] top-[82px] absolute border-b border-[#e6e6e6] flex-col justify-start items-start gap-[29px] inline-flex">
    <div class="self-stretch h-[91px] flex-col justify-start items-center gap-[18px] flex">
      <div class="self-stretch text-center text-[#1a1a1a] text-lg font-semibold font-Robot">Register Students</div>
    </div>
  </div>
  <div class="h-[555px] left-[540px] top-[166px] absolute flex-col justify-start items-center gap-12 inline-flex  ">
    <div class="self-stretch h-[110px] flex-col justify-start items-center gap-[39px]  flex">
      <div class="h-[148px] flex-col justify-start items-center gap-[18px] flex">
        <div class="w-[108px] h-[108px] relative">
          <div class="w-[108px] h-[108px] left-0 top-0 absolute bg-[#e3e3e3] rounded-full">
          <img src={imageIcon} alt='image'/>
          </div>
        
        </div>
       
        <div class="self-stretch text-center text-[#cc781d] text-lg font-semibold font-Roboto">Add Photo</div>
      </div>
      <form onSubmit={handleSubmit} >
    
                  <input class="self-stretch h-[55px] w-[500px] mb-3 pl-[17px] pr-2.5 py-[18px] bg-[#f8f8f8] rounded-[10px] border border-[#d3d3d3] justify-start items-center gap-3 inline-flex text-[#afafaf] text-base font-medium font-Roboto"
                    type="text" 
                    onChange={handleChange}
                    name='name'
                    value={valueForm.name} 
                    placeholder='Name'
                    />
              
                <br/>
                
                  <input className="self-stretch h-[55px] w-[500px]  pl-[17px] pr-2.5 py-[18px] bg-[#f8f8f8] rounded-[10px] border border-[#d3d3d3] justify-start items-center gap-3 inline-flex text-[#afafaf] text-base font-medium font-Roboto" 
                  type="number" 
                    onChange={handleChange}
                    name='StudentNumber'
                    value={valueForm.username} 
                    placeholder='Student Number'
                  />
               
                <br/>
                 
                  <input className="self-stretch h-[55px] w-[500px] mt-3 pl-[17px] pr-2.5 py-[18px] bg-[#f8f8f8] rounded-[10px] border border-[#d3d3d3] justify-start items-center gap-3 inline-flex text-[#afafaf] text-base font-medium font-Roboto" 
                    type="text"
                    onChange={handleChange}
                    name='Course'
                    value={valueForm.phone} 
                    placeholder='Course'
                    />
               
                <br/>
                 
                  <input className="self-stretch h-[55px] w-[500px] mb-3 mt-3 pl-[17px] pr-2.5 py-[18px] bg-[#f8f8f8] rounded-[10px] border border-[#d3d3d3] justify-start items-center gap-3 inline-flex text-[#afafaf] text-base font-medium font-Roboto" 
                    type="text" 
                    onChange={handleChange}
                    name='Cohort'
                    value={valueForm.password} 
                    placeholder='Cohort'
                    />
                <br/>
    
                <div className="self-stretch h-[55px] w-[500px] mt-10 px-2.5 py-[18px] bg-[#f39b3b] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                <button class="text-white text-lg font-semibold font-Roboto">
                Register Student
                </button>
              </div>
            </form>
      
       
    </div>
  </div>
</div>
  )
}

export default Register