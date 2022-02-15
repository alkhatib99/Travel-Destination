import Tours  from "../tours/Tours.js"
import tourData from "../../data/db.json"
import Header from "../header/Header.js"
import Footer from '../footer/Footer.js'
function Home(){

return (

    <>
    <header>
<Header/>

    </header>
        <Tours data={tourData} title="All Cities" />
       
       <footer>

<Footer/>
       </footer>
       </>
)



}

export default Home;