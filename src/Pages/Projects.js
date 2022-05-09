import newyork from '../Images/new york.jpg';
import stock from '../Images/stock.jpg';
import pfizer from '../Images/pfizer.jpg';
import league from '../Images/league.jpg';



import '../Styles/Projects.css';
const Projects = () => {

    return (
        <>
        <div className="projects-grid-container">
          
                <img src={newyork} />
               
                <img src={stock} />
                <img src={pfizer} />
                <img src={league} />


        </div>
        </>
    );
}

export default Projects;