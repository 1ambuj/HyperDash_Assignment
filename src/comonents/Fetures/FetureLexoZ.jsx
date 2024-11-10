
import FeatureLexoZ from "../../assets/Features2.2Image.png"
const FetureLexoZ = () => {
  return (
    <div className="flex bg-[#1A1A1A] text-[#FFFFFB]">
      <div className="bg-[#1A1A1A] w-[50%]">
        <div className="w-[53.43%] mx-auto my-40">
            <h1 className="text-5xl">Lexo Z</h1>
            <h3 className="text-3xl my-2">Accelerate into a New Era</h3>
            <p className="text-sm my-8 flex flex-col gap-4 text-[13.5px]">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </span>

               <span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </span>

                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat </span>
            </p>
            <div className="flex gap-6 items-center">
                <button className="text-[#1A1A1A] bg-white px-4 py-2 text-lg">Order now</button>
                <button className="text-lg">Learn More</button>
            </div>
        </div>
      </div>  
      <div className="w-[50%]">
        <img src={FeatureLexoZ} alt="" className="w-full h-full"/>
      </div>
    </div>
  )
}

export default FetureLexoZ