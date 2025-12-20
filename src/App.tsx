import { GetMeQuery } from './Hooks/GetMeQuery'
import { RouterApp } from './RouterApp'

function App() {
    const {data , isLoading , error} = GetMeQuery()
    console.log("Data ==> " , data);
    
  
  return (
   <div className="">
     <div className='transition-all min-h-screen dark:bg-[#141d2d] bg-slate-200'>
      <RouterApp/>
    </div>
   </div>
  )
}

export default App