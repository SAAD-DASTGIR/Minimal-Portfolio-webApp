import React  from "react";
export default function Footer(props){
    return(
        <div className={props.darkMode ? "dark" : ""}>
            <div className="footer-whole-content" >

            <a className="footer-link"
            href="mailto:saaddastgir@gmail.com">msaaddastgir@gmail.com</a>
            <ul className="list">
                <li className="list-item">
                    <a href="https://github.com/SAAD-DASTGIR">
                    <img src="GitHub Icon.png" /></a></li>
                <li className="list-item" >
                    <a href="https://hashnode.com/@Saaddastgir">
                    <img 
                    className="hashnode"
                    src="hashnode.PNG" /></a></li
                    >

                    
                <li className="list-item">
                    <a href="https://www.facebook.com/saad.dastgir.3?mibextid=ZbWKwL">
                    <img src="Facebook Icon.png" /></a></li>
                <li className="list-item">
                    <a href="https://www.linkedin.com/in/saad-dastgir-8357b51b2/?originalSubdomain=pk">
                    <img 
                    className="linkedin-img"
                    src="linkedin (1).svg"/></a></li>
            </ul>
            </div>

        </div>
    )
}