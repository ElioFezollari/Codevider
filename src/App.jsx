
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import DefaultLayout from './DefaultLayout/DefaultLayout'
import Home from './Pages/Home'
import Dogs from './Pages/Dogs'


const router = createBrowserRouter([
  {
    path:'/',
    element:<DefaultLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
    {
      path:'dogs',
      element:<Dogs/>
    }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
