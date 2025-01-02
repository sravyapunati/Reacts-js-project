import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListComponent from './components/ListComponent'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    //<>-> fragament
    <>
   <HeaderComponent/>
   <ListComponent/>
   <FooterComponent/>
    </>
  )
}

export default App
