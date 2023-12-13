import React from 'react'
import Service from '@/components/service/service';
import Footer from '@/components/Footer/Footer';
export default function page() {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)',
  };
  return (
   <>
     <div style={gradientStyle}>
      <Service/>
      
    </div>
    <Footer/>
   </>
  )
}
export async function generateMetadata(){
 
  return{
    title: "Service",
  
  }

}