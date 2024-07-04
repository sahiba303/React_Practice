import React from "react";
import laptop from "../../Images/laptop.png";
export default function Profile() {
  return (
    <>
    <div>
      <div className="flex justify-center pt-10 ">
        <div className="p-2 bg-gray-200 w-48 h-48 rounded-full">
          <img src={laptop} alt="" className="w-full object-cover  h-full rounded-full bg-cover" />
        </div>
      </div>

      <div className="flex justify-center pt-5 font-bold text-[30px]">
        <h1>Lucy Rush</h1>
      </div>
      <div className="flex justify-center pt-3 text-[19px] w-[450px] text-center leading-7 text-md mx-auto">
        <p>Founder in a rush. Openly sharing process daily. <br /> →$2M+ ARR →100k+ users on b2b. 2b <br /> →10M+ users on b2b2c

</p>
      </div>
    </div>
    
    
    
    </>
  );
}
