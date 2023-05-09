import React from 'react'
import  LinkedInIcon  from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <LinkedInIcon aria-label="Linkedin.com"  onClick={()=>
                window.open('https://www.linkedin.com/in/md-zakir-ahmed',"_blank")}/>
            <GitHubIcon aria-label="Github.com"  onClick={()=>
                window.open('https://github.com/Md-Zakir-Ahmed7',"_blank")}/>
        </div>
        <p>➡️ WILL TO LEARN⬅️ </p>
    </div>
  )
}

export default Footer