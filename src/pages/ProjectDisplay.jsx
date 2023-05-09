import React from 'react'
import {useParams} from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import  GitHubIcon  from '@mui/icons-material/GitHub'
import '../styles/ProjectDisplay.css'
function ProjectDisplay() {
    const {id}=useParams();
    const project=ProjectList[id]
  return (
    <div className='project'>
         <h1> {project.name}</h1>
         <img src={project.image}/>
         <p>
           <b> Skills:</b>{project.skills}
         </p>
         <GitHubIcon aria-label="Github.com"  onClick={()=>
                window.open('https://github.com/Md-Zakir-Ahmed7',"_blank")}/>
    </div>
  )
}

export default ProjectDisplay