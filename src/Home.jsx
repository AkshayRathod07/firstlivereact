
import React from "react";

import web from "../src/images_1/img_Home.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name_1=" Grow your business
                    with"
        name_2="We are the team of talented developer making websites"
        visit="/Service"
        imgsrc={web}
        btnName="Get started "
      />
    </>
  );
};

export default Home;
