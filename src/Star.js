export default function Star(props){
    const starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    return(

        <img 
            className="card-favorite"
            src="`../images/${starIcon}`" 
            alt=""
            onClick={props.handleClick} />
    )
}