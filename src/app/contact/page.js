import React from 'react'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function page() {
  return (
    <div><Contact/>
    <Footer/>
    </div>
  )
}

export async function generateMetadata(){
 
  return{
    title: "Contact",
  
  }

}