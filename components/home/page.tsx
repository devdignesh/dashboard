import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

interface Props {
    children:React.ReactNode
}

const Home = ({children} : Props) => {
  return (
    <div className='w-full'>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
 


export default Home
