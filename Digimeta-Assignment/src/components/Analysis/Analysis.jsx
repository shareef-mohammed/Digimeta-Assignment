import React from "react";
import Part_1 from "./Part_1";
import Part_2 from "./Part_2";
import Part_3 from "./Part_3";
import Part_4 from "./Part_4";
import Footer from '../Footer'

const Analysis = ({fold, onClose}) => {
  return (
    <div className={`bg-[#f0f2f5] ${fold ? 'w-[92%] md:w-[92%] md:ml-[8%] ml-[8%]' : 'md:w-[85%] w-[100%] md:ml-[15%]'}`} onClick={onClose}>
      <Part_1 />
      <Part_2 />
      <Part_3 />
      <Part_4 />
      <Footer />
    </div>
  );
};

export default Analysis;
