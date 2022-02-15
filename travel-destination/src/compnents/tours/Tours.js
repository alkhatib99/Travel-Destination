import Tour from "./tour/tour.js";
import {Link} from "react-router-dom";
function Tours(props) {
  console.log(props);

  return (
    <>
      {
      props.data.map((tour) => {
        return(
<div classname="tour-preview" key={tour.id}>
<Link to={`/tour/${tour.id}`}>
<Tour tour={tour}  />
</Link>

    
</div>

            
        )
      })
      }
    </>
  );
}
export default Tours;
