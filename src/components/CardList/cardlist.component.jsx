import './cardlist.styles.css'
import Card from "../Card/card.component.jsx";



const CardList = ({ projects }) => (
    <div className="card-list">
        {projects.map((project) => {
            return <Card project={project} key={project.id} />




        })}
    </div>
);


export default CardList