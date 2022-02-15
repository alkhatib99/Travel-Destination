// import linkedin from "~/src/images/linkedin.png"
import logo from "./images/linkedin.png";
import "./Footer.css";
function Footer(){

    return (
        <div className="footer">
        <a href="https://www.linkedin.com/in/abdulqader-alkhatib-850453216/" ><img className="footer-image" src={logo} alt="The linkedin logo" width="100px"
        /> </a>
        <h5>
        <strong>
          &copy;2022 Developer AbedAlqader | All Rights Reserved.
        </strong>





      </h5>

        </div>
    )
}

export default Footer;