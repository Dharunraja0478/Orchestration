import React from 'react'
import Sidebar from '../components/Sidebar'
import HeaderCard from '../components/HeaderCard'
import Workflow from '../components/Workflow'
import Workflow2 from '../components/Workflow2'
import Workflow3 from '../components/Workflow3'
export default function Dashboard() {
  return (
    <div >
      
      <HeaderCard/>
      <Sidebar/>  
      <Workflow/>  
      <Workflow2/>
      <Workflow3/>
    </div>
  )
}
