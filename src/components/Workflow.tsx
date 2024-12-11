import React from 'react'
import "../styles/Workflow.css" 
import more from '../assets/more'; 
import line from '../assets/line'; 
import history from '../assets/history'; 
import filter from '../assets/filter'; 
import arrow from '../assets/arrow'; 
import rightarrow from '../assets/rightarrow';
function Workflow() {
  return ( 
    <> 
<div  > 

    <div className='head-container'>
            <div className='workflow-heading'>Workflow Dashboard
            </div>   
      
            <div className='status-bar'>
                
                  
                  <img src={filter.filterpng}  style={{marginLeft:'40px' ,marginTop:'-3px'}} /> 
                   <p style={{marginTop:'-30px', color:'gray'}}>Filter</p>
                   
                
               
            </div> 



            <div className='status-bar-1'>
                
                  
                  <img src={arrow.arrowpng}  style={{marginLeft:'40px' ,marginTop:'-3px'}} /> 
                  
                   <p style={{marginTop:'-30px', color:'gray'}}>Status</p>
                   
                
               
            </div>



    </div>
        
     {/* first 3 card */}

     <div>


      <div className='workflow-card'>

<div className='card-firstdiv'>
      <h5 className='card-heading'>Signup</h5>  
      
      <h5 className='card-status'>pending</h5> 
      <img src={more.morepng} alt='more' className='card-icon'/>     
</div> 

<div className='card-firstdiv'>
    <p className=' card-p'>Workflow Id :</p> 
    <p className=' card-p1'>2024-WF-D01</p>
</div>   

<div className='card-firstdiv-2'>
    <p className=' card-p'>Created Date :</p> 
    <p className=' card-p1'>10-02-2024</p>
</div>   

<div className='seconddiv'>
     <h4  style={{marginTop:'3px'}}>Vertex Details</h4> 
     <p className='card-p' style={{marginLeft:'260px', marginTop:'-40px',fontSize:'13px',color:'gray'}}>To be added</p>
</div> 


<div className='seconddiv'>
     <h4  style={{marginTop:'3px'}}>Workflow Execution</h4> 
     <p className='card-p' style={{marginLeft:'260px', marginTop:'-40px',fontSize:'12px',color:'gray'}}>Not yet Executed</p>
 </div> 


  <img src={line.linepng} style={{marginLeft:'15px'}} /> 



<div className='finaldiv'> 
    <img src={history.historypng} alt='history' style={{marginLeft:'15px',marginTop:'15px', width:'20px'

    }}/> 

     <p className='card-p' style={{fontSize:'10px',color:'gray', marginLeft:'40px', marginTop:'-20px'}} >Updated 2 hours ago</p>
     
     <button className='card-button'>
      Add Vertex
     </button>

</div>
    
</div>  


<div className='workflow-card' style={{marginLeft:'700px', marginTop:'-280px'}}>

<div className='card-firstdiv'>
      <h5 className='card-heading'>Signup</h5>  
      
      <h5 className='card-status'>pending</h5> 
      <img src={more.morepng} alt='more' className='card-icon'/>     
</div> 

<div className='card-firstdiv'>
    <p className=' card-p'>Workflow Id :</p> 
    <p className=' card-p1'>2024-WF-D01</p>
</div>   

<div className='card-firstdiv-2'>
    <p className=' card-p'>Created Date :</p> 
    <p className=' card-p1'>10-02-2024</p>
</div>   

<div className='seconddiv'>
     <h4  style={{marginTop:'3px'}}>Vertex Details</h4> 
     <p className='card-p' style={{marginLeft:'260px', marginTop:'-40px',fontSize:'13px',color:'gray'}}>To be added</p>
</div> 


<div className='seconddiv'>
     <h4  style={{marginTop:'3px'}}>Workflow Execution</h4> 
     <p className='card-p' style={{marginLeft:'260px', marginTop:'-40px',fontSize:'12px',color:'gray'}}>Not yet Executed</p>
 </div> 


  <img src={line.linepng} style={{marginLeft:'15px'}} /> 



<div className='finaldiv'> 
    <img src={history.historypng} alt='history' style={{marginLeft:'15px',marginTop:'15px', width:'20px'

    }}/> 

     <p className='card-p' style={{fontSize:'10px',color:'gray', marginLeft:'40px', marginTop:'-20px'}} >Updated 2 hours ago</p>
     
     <button className='card-button' style={{fontSize:'12px' , height:'40px'}}>
       Execute Now
     </button>

</div>
    
</div> 

 
<div className='workflow-card' style={{marginLeft:'1100px' ,marginTop:'-280px'}}>

<div className='card-firstdiv'>
      <h5 className='card-heading'>Signup</h5>  
      
      <h5 className='card-status' style={{background:'#D1FDD6'}}>Active</h5> 
      <img src={more.morepng} alt='more' className='card-icon'/>     
</div> 

<div className='card-firstdiv'>
    <p className=' card-p'>Workflow Id :</p> 
    <p className=' card-p1'>2024-WF-D01</p>
</div>   

<div className='card-firstdiv-2'>
    <p className=' card-p'>Created Date :</p> 
    <p className=' card-p1'>10-02-2024</p>
</div>   

<div className='seconddiv'>
     <h4  style={{marginTop:'3px'}}>Vertex Details</h4> 
     <img src={rightarrow.rightarrowpng} style={{
        width:'25px' , marginLeft:'300px',marginTop:'-38px', color:'grey'
     }}/>
</div> 


<div className='seconddiv'>
     <h4  style={{marginTop:'3px'}}>Workflow Execution</h4> 
     <img src={rightarrow.rightarrowpng} style={{
        width:'25px' , marginLeft:'300px',marginTop:'-38px', color:'grey'
     }}/>
 </div> 


  <img src={line.linepng} style={{marginLeft:'15px'}} /> 



<div className='finaldiv'> 
    <img src={history.historypng} alt='history' style={{marginLeft:'15px',marginTop:'15px', width:'20px'

    }}/> 

     <p className='card-p' style={{fontSize:'10px',color:'gray', marginLeft:'40px', marginTop:'-20px'}} >Updated 2 hours ago</p>
     
    <p style={{marginLeft:'260px', color:'#003890',marginTop:'-30px'}}> See more </p> 
   
     <img src={rightarrow.rightarrowpng} style={{
        width:'25px' , marginLeft:'330px',marginTop:'-38px'
     }}/>
     
</div>
    
</div> 


      </div>

     

       {/* second three card */}
     


          {/* third three card */}

     

     



  



</div>
    
    
    
    
    
    </>
    
  )
}

export default Workflow;