import React from 'react';
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School'

function Education() {
  return (
    <div className='experience'>
    <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date="2021-2024"
            iconStyle={{background: "#3e497a",color:"#fff"}}
            icon={<SchoolIcon/>}
        >
        <h3 className='vertical-timeline-element-title'>MuffakhamJah College of Engineering and Technology,Banjara Hills</h3>
        <p>B.E[Information Technology]</p>
        <p>CGPA:8</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date="2018-2021"
            iconStyle={{background: "#3e497a",color:"#fff"}}
            icon={<SchoolIcon/>}
        >
        <h3 className='vertical-timeline-element-title'>Gpt,Masabtank</h3>
        <p>Diploma in Mechanical Engineering</p>
        <p>CGPA:9.7</p>
        
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date="2018  "
            iconStyle={{background: "#3e497a",color:"#fff"}}
            icon={<SchoolIcon/>}
        >
        <h3 className='vertical-timeline-element-title'>Little Scholar High School</h3>
        <p>SSC</p>
        <p>CGPA:9.3</p>

        </VerticalTimelineElement>
        
    </VerticalTimeline>
    </div>
  );
}

export default Education