
import './App.css'
import DefaultLayout from './DefaultLayout/DefaultLayout'

function App() {

  const getBirds =async () =>{
    const response = await fetch('https://freetestapi.com/api/v1/birds')
    const birds = await response.json()
    console.log(birds)
  }
  getBirds()
  return (
    <>
    <DefaultLayout/>
    
    </>
  )
}

export default App
