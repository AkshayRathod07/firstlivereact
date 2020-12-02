import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images_1/img_About.png";
import Common from './Common';


const About = () => {
  return (
    <>
  <Common
        name_1=" welcome to About 
        page with"
        name_2="i am a full stack developer my specialization in  ==> M E A R N        
                i have already done 50+ projects on frontend.

                if you want to hired ! & quaries click a contact button
               
                " 

        visit="/contact"
        imgsrc={web}
        
        btnName="Contact"

      />
    </>
  );
};

export default About;
