import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListComponent from './components/ListComponent'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateComponent from './components/CreateComponent'
import GetComponent from './components/GetComponent'
function App() {
 // const [count, setCount] = useState(0)

  return (
    //<>-> fragament
    <>
    {/* <ListComponent/> */}
    <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          <Route path="/" element={<ListComponent/>}></Route>
          <Route path="/employee" element={<ListComponent/>}></Route>
          <Route path="/create" element={<CreateComponent/>}></Route>
          <Route path="/get/:id" element={<GetComponent/>}></Route>
          <Route path="/update/:id" element={<GetComponent/>}></Route>
        </Routes>
      <FooterComponent/>
    </BrowserRouter>
   
    </>
  )
}

export default App