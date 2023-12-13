import Image from 'next/image'
//import NavBar from '@/components/navBar/NavBar'
import MainContain from '@/components/HomePages/mainContain'

import ProjectPage from '@/components/Project/ProjectPage'
export default function Home() {



  return (
    <><div className=' '>
   
      <ProjectPage/>
    </div></>
  )
}


export async function generateMetadata(){
 
  return{
    title: "Project",
  }

}