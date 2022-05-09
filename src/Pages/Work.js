import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../Styles/Work.css';
const Work = () => {
    return(
        <>
        <br/>
       <div style={{color:'white', textAlign:'center'}}>
           <h1 className='work-title'>Work Experience</h1>
           <div className='work-subtitle'>Roles & Responsibilities</div>
         
           <br/><p className='work-description'>The following is an outline of my current and past work experience. Each role has provided an opportunity to learn, grow, and continue developing both as a person and a professional. <br/><br/>Take a look to learn more!</p>

       </div>
       <br/>
        <div className="work-grid-container">
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#711A75', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #711A75' }}
    date="September 2021 - December 2021"
    iconStyle={{ background: '#711A75', color: '#fff' }}
 
  >
    <h3 className="vertical-timeline-element-title">Financial Analyst</h3>
    <h4 className="vertical-timeline-element-subtitle">MINTO Group</h4>
   <br/>
   <div className='work-list'><ul>
    <li>
    Prepare and maintain financial models to assist in monthly & quarterly management reporting to partners and lenders.
    </li>
    <li>
    Research, analyze, and compile detailed information about sold unit agreements for revenue forecasting.
    </li>
    <li>Prepare monthly reports of actual costs for land development budgets, construction costs, and sales & marketing expenditures.</li>
    <li>Analyze variances between actual and projected results between various models.</li>
    <li>Excessive use of MS Excel, VBA, and Power Query to conduct the above tasks.</li>
   </ul>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="January 2020 - August 2020"
    iconStyle={{ background: '#FF8C32', color: 'blue' }}
    contentStyle={{ background: '#FF8C32', color: '#fff' }}
  >
       <h3 className="vertical-timeline-element-title">Accounting Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">ADGA Group Consultants Inc</h4>
   <br/>
   <div className='work-list'><ul>
    <li>
    Worked alongside multiple department heads to fund projects.
    </li>
    <li>
    Assisted every member of the Finance department in conducting their daily operations.
    </li>
    <li>Made use of MS Excel, MS Word and SAGE 50 to conduct accounting analyses and provide professional reports.</li>
    
   </ul>
    </div>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#FF5C8D', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #FF5C8D' }}
    date="August 2019 - December 2019"
    iconStyle={{ background: '#FF5C8D', color: '#fff' }}
 
  >
    <h3 className="vertical-timeline-element-title">First Year Connections Mentor</h3>
    <h4 className="vertical-timeline-element-subtitle">SEO Carleton University</h4>
   <br/>
   <div className='work-list'><ul>
    <li>
    Prepare and maintain financial models to assist in monthly & quarterly management reporting to partners and lenders.
    </li>
    <li>
    Research, analyze, and compile detailed information about sold unit agreements for revenue forecasting.
    </li>
    <li>Worked with multiple first year students to help them face issues of cultural change.</li>
    <li>Assisted in providing academic assistance to students by guiding them to the appropriate services.</li>
    <li>Maintained consistent meeting schedules to allow each member the chance to express their concerns without any rush.</li>
   </ul>
    </div>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="September 2018 - March 2019"
    iconStyle={{ background: '#B33030', color: 'blue' }}
    contentStyle={{ background: '#B33030', color: '#fff' }}
  >
       <h3 className="vertical-timeline-element-title">Group Mentorship Facilitator</h3>
    <h4 className="vertical-timeline-element-subtitle">ISSO Carleton University</h4>
   <br/>
   <div className='work-list'><ul>
    <li>
    Organized multiple sessions to educate international students about the university's services and Canadian culture.
    </li>
    <li>
    Assisted the supervisor in collecting and analyzing data using MS Excel.
    </li>
    <li>Directed students with specific issues to the appropriate on-campus. services</li>
    
   </ul>
    </div>
  </VerticalTimelineElement>




  </VerticalTimeline>
</div>
<br/>
        </>
    );
}

export default Work;