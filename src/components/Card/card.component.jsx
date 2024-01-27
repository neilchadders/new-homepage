
import './card.styles.css'


const Card = ({ project}) => {
    const { name, race, realm, link, pic } = project;

    return (
        <div className="card-container">
            <img className="pic" src={pic} />

    
            <h3 className="name">{name}</h3>
            <p className="race">{race}</p>
            <p className='realm'>{realm}</p>
            <a className="link" href={link} target={"__blank"}>Wiki</a>

          
        </div>
    );
}

export default Card