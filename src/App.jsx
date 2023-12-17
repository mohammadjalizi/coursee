
import './App.css'
import Leftbar from './assets/pages/Leftbar'
import Navbar1 from './assets/pages/Navbar1'
import Navbar2 from './assets/pages/Navbar2'

function App() {


  return (
    <div className='   md:px-36 '>
<Navbar1/>
<div className='  rounded-sm   h-full bg-[rgb(247,247,247)] '>



<Leftbar/>
<Navbar2/>
</div>
    </div>
  )
}

export default App
