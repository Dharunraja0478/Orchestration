import React from 'react';
import '../styles/Sidebar.css'; 
import dashboardpng  from '../assets/dashboardpng';
import workflow from '../assets/workflow';
import vertex from '../assets/vertex';
import execution from '../assets/execution';
 // Correct path if the image is directly in `assets`
// Correct path if the directory is different


function Sidebar() {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-items' >

        
           <img  src={dashboardpng.dashboard} alt='Dashboard'  />     
            
          <h5  className='sidebar-text'> Dashboard</h5>
              
      
          
          
        
      </div>  
 

      <div className='sidebar-items2'>

        
      <img  src={workflow.workflowimg} alt='workflow'  />     
 
      <h5  className='sidebar-text2'> Workflow</h5>
   
     </div>   


      
     <div className='sidebar-items2'>

        <img  src={vertex.vertexpng} alt='Vertex'  />     
 
       <h5  className='sidebar-text2'> Vertex</h5>
   
    </div>   


    <div className='sidebar-items2'>

        <img  src={execution.executepng} alt='Execution'  />     
 
       <h5  className='sidebar-text2'> Execution </h5>
   
    </div>  



      



      


      
    </div>
  );
}

export default Sidebar;
