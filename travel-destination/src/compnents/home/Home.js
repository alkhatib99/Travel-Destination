import Tours  from "../tours/Tours.js"
import tourData from "../../data/db.json"

function Home(){

return (

    <>
        <Tours data={tourData} />
       </>
)



}

export default Home;