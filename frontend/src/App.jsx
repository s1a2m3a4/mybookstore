
import React from 'react'
import Home from './home/Home'
import {Navigate, Route,Routes} from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import { UseAuth } from './context/AuthProvider'
import About from './components/About'


// const App = () => {
//   return (
//    <>
//       <div className='dark:bg-slate-900 dark:text-white '>
//       <Routes>
//            <Route path='/' element={<Home/>}/>
//            <Route path='/course' element={<Courses/>}/>
//            <Route path='/signup' element={<Signup/>}/>
//            <Route path='/contact' element={<Contact/>}/>


//       </Routes>
//       </div>

//    </>
//   )
// }



const App = () => {
  const[authUser,setAuthUser]=UseAuth();
  console.log(authUser);
  
  return (
    <div className="flex flex-col min-h-screen dark:bg-slate-900 dark:text-white">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>

    </div>
  );
};
export default App
