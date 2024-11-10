

const FetureNumerical = () => {
  return (
    <div className="bg-[#1A1A1A] h-80 w-full flex flex-wrap items-center justify-around text-[#FFFFFB]">
        <div className="flex justify-center items-center flex-col">
            <p className="text-xs text-[#FFFFFB] font-light my-5">Max Power</p>
            <span className="text-5xl font-light">1200+</span>
            <p className="font-extralight text-4xl" >hp</p>
        </div>
        <div  className="flex justify-center items-center flex-col">
            <p className="text-xs text-[#FFFFFB] font-light my-5">EPA estimated range up to</p>
            <span className="text-5xl font-light">516</span>
            <p className="font-extralight text-4xl" >mi</p>
        </div>
        <div  className="flex justify-center items-center flex-col ">
            <p className="text-xs text-[#FFFFFB] font-light my-5">minutes to charge 200 miles</p>
            <span className="text-5xl font-light">12</span>
            <p className="font-extralight text-4xl" >minus</p>
        </div>
        <div  className="flex justify-center items-center flex-col">
            <p className="text-xs text-[#FFFFFB] font-light my-5">  0-60 mph</p>
            <span className="text-5xl font-light"> {"<2 "}</span>
            <p className="font-extralight text-4xl"> sec </p>
        </div>
    </div>
  )
}

export default FetureNumerical