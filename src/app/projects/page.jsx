import Image from 'next/image'
import React from 'react'
import ProjectPage from "@/components/Project/ProjectPage"
export default function page() {
  return (
   <>
    <ProjectPage/>

   </>
  )
}

export async function generateMetadata(){
  
  return{
    title: "Project",
  
  }

}