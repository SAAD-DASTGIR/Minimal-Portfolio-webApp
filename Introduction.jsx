import React from "react";
import { TypeAnimation } from 'react-type-animation';
export  default function Introduction(props){
    return(
        <div className={props.darkMode ? "dark" : ""}>

            <div className="intro" id="home">
                <div className="awein">

                <h1 className="section-intro"> 
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Hi,I am ',
                            1000
                        ]}
                        wrapper="section-intro"
                        speed={50}
                        //   style={{ display: 'inline-block' }}
                        repeat={Infinity}
                        />
                    <strong className="strong">
                        <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Saad Dastgir',
                        1000
                    ]}
                    wrapper="strong"
                    speed={1}
                    //   style={{ display: 'inline-block' }}
                    repeat={Infinity}
                    />
                    </strong>
                </h1>
                <p className="section-subtitle">
                <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'FRONT-END DEVELOPER',
                            1000
                        ]}
                        wrapper="section-subtitle"
                        speed={0.01}
                        //   style={{ display: 'inline-block' }}
                        repeat={Infinity}
                        />

                </p>
                        </div>
            
                <img className="intro-image" src="WhatsApp Image 2023-07-22 at 10.30.10 PM (3).jpeg"/>
            </div>
            
        </div>
                    
        
        )
        
    
}