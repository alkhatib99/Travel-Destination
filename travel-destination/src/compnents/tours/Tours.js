function Tours(props) {
  console.log(props);

    return (
        <>
            {
                props.data.map(tour => {

                    return (


                        <div>
                            <h3> Name: {tour.name}</h3>
                            <img src={tour.image} alt=""/>
                        </div>

                    );
                })

            }

        </>

    );
}
export default Tours;