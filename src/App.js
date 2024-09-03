
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Component/Login';
import Attendance from './Component/Attendance';
import Register from './Component/Register';
import StudentList from './Component/StudentList';
import Settings from './Component/Settings';
import CourseSetting from './Component/CourseSetting';
import PasswordSetting from './Component/PasswordSetting';

function App() {
  return (
    <div className="App">
     
     
     
     
    
     
     
     <BrowserRouter>
     <div className="bg-white w-full h-full">
      <Routes>
        <Route>
        <Route path="/" element={<Login />} />
          <Route path="Attendance" element={<Attendance/>} />
          <Route path="Register" element={<Register/>} />
          <Route path="Studentlist" element={<StudentList/>} />
          <Route path="Settings" element={ <Settings/>} />
          <Route path="CourseSetting" element={<CourseSetting/>} />
          <Route path="PasswordSetting" element={<PasswordSetting/>} />
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
 
    </div>
  );
}

export default App;
