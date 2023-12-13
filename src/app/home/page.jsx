import React from 'react'
import Home from '@/components/HomePages/mainContain'
import Footer from '@/components/Footer/Footer'
export default function page() {
  return (
    <div><Home/>
    <Footer/></div>
  )
}
export async function generateMetadata(){
 
  return{
    title: "Home",
  
  }

}