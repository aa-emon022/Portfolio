import React from 'react'

import TimeLine from '@/components/About/About'
import Footer from '@/components/Footer/Footer'


export default function page() {
  
  return (
    <div>
   
  <TimeLine/>
    <Footer/>
    </div>
   
  )
}
export async function generateMetadata(){
 
  return{
    title: "About",
  
  }

}