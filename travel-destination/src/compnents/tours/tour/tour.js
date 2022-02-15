function Tour(props){


    return (
   
        
             <div className="tour-card">
        <h3> Name: {props.tour.name}</h3>
       <img src={props.tour.image} alt=""/> 
    </div>
    
    )
}

export default Tour;