const Card = ({ thumbnail }) => {
    return <img className="card" src={thumbnail.url} alt={thumbnail.tittle}/>
}

export default Card