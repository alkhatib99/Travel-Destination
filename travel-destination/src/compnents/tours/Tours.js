import Tour from "./tour/tour.js";
function Tours(props) {
  console.log(props);

  return (
    <>
      {
      props.data.map((tour) => {
        return <Tour tour={tour}  key={tour.id}/>;
      })
      }
    </>
  );
}
export default Tours;
