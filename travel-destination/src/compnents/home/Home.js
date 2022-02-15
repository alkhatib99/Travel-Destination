import Tours  from "../tours/Tours.js"
import tourData from "../../data/db.json"
import Header from "../header/Header.js"
import Footer from '../footer/Footer.js'
function Home(){

return (

    <>
    
<Header/>

      <Tours data={tourData} title="All Cities" />
       
   

<Footer/>
       </>
)



}

export default Home;