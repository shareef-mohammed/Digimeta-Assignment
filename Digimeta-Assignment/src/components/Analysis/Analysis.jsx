import React from "react";
import Part_1 from "./Part_1";
import Part_2 from "./Part_2";
import Part_3 from "./Part_3";
import Part_4 from "./Part_4";
import Footer from '../Footer'

const Analysis = ({fold}) => {
  return (
    <div className={`bg-[#f0f2f5] ${fold ? 'w-[93%] md:w-[96%] md:ml-[4%] ml-[7%]' : 'md:w-[85%] w-[75%] md:ml-[15%] ml-[25%]'}`}>
      <Part_1 />
      <Part_2 />
      <Part_3 />
      <Part_4 />
      <Footer />
    </div>
  );
};

export default Analysis;
