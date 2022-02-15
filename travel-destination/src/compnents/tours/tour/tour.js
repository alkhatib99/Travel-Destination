function Tour(props){


    return (
   
        <div>
        <h3> Name: {props.tour.name}</h3>
       <a onClick={handleClick}> <img src={props.tour.image} alt=""/> </a>
    </div>
    )
}

export default Tour;