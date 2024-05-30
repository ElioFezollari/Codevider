
import './App.css'
import DefaultLayout from './DefaultLayout/DefaultLayout'
import Home from './Pages/Home'
import Header from './DefaultLayout/Header'

import Footer from './DefaultLayout/Footer'
function App() {

  const getBirds =async () =>{
    const response = await fetch('https://freetestapi.com/api/v1/birds')
    const birds = await response.json()
    console.log(birds)
  }
  getBirds()
  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
