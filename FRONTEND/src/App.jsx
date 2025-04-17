import { useState } from 'react'

import { createBrowserRouter,RouterProvider} from "react-router-dom";

import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs';
import Browse from './components/Browse';

const appRouter = createBrowserRouter([
{
  path:'/Home',
  element:<Home/> 
},
{
  path:'/login',
  element:<Login/> 
},
{
  path:'/browse',
  element:<Browse/> 
},
{
  path:'/Jobs',
  element:<Jobs/> 
},

{
  path:'/signup',
  element:<Signup/> 
},
])
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
    <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default App
