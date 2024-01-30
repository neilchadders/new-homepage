
import './card.styles.css'


const Card = ({ project}) => {
    const { name, description, link, pic } = project;

    return (
        <div className="card-container">
            <article>
             <div className="article-wrapper">
      <figure>
        <img className="pic" src={pic} alt="" />
      </figure>
     
      <div className ="article-body">
        <h2>{name}</h2>
        <p>{description}</p>
          
        <a href={link} target={"__blank"}className="read-more">
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>

 {/* <div className="card-container">

<img className="pic" src={pic} />
<h3 className="name">{name}</h3>
<p className="race">{race}</p>
<p className='realm'>{realm}</p>
<a className="link" href={link} target={"_blank"}>Wiki</a>
    </div> */}
        </div>
    );
}

export default Card