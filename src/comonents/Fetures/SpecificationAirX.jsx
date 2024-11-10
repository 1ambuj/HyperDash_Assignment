

const SpecificationAirX = () => {
  return (
   <div className="w-full bg-specification-air bg-cover bg-no-repeat bg-center h-[100vh] flex items- justify-center gap-24">
      <div className=" bg-left w-[50%] h-[100vh] text-left">
      </div>
      {/* <div className="w-full h-[100vh]"> */}
      <div className="w-[50%] h-full text-[#FFFFFB] flex flex-col justify-center">
             <h3 className="text-[22.83px]">Model Air X Specifications</h3>
         <div className="flex gap-20 items-center">
         <div>
               <div className="flex flex-col gap-2 my-8 font-light text-[16.83px]">
                  <p>Range (EPA est.)</p>
                  <p>4.5s 0-60 mph</p>
                </div>
                <div className="flex flex-col gap-2 my-8 text-[16.83px]">
                  <p> Peak Power</p>
                  <p>400 hp</p>
                </div>
                <div className="flex flex-col gap-2 my-8 text-[16.83px]">
                  <p> Towing</p>
                  <p>2000 pounds</p>
                </div>  
                <div className="flex flex-col gap-2 my-8 text-[16.83px]">
                  <p> Drag Coefficient </p>
                  <p>0.28 cd  </p>
                </div>
         </div>
         <div>
              <div className="flex flex-col gap-2 my-8 font-light text-[16.83px]">
                  <p>Acceleration</p>
                  <p>Up to 300 miles</p>
                </div>
                <div className="flex flex-col gap-2 my-8 font-light text-[16.83px]">
                  <p> Wheels</p>
                  <p>19’’ or 20’’</p>
                </div>
                <div className="flex flex-col gap-2 my-8 font-light text-[16.83px]">
                  <p>  Seating</p>
                  <p>Up to 5</p>
                </div>
                <div className="flex flex-col gap-2 my-8 font-light text-[16.83px]">
                  <p> top speed</p>
                  <p>130 mph</p>
                </div>
        </div>
         </div>
      </div>
      </div>
  //  </div>
  )
}

export default SpecificationAirX