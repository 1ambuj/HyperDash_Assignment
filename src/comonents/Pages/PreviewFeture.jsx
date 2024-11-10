import DesignFirst from "../../assets/DesignImg.png"
import PerformanceFirst from "../../assets/DesignImg.png"
import Interiors from "../../assets/InteriorsImg.png"
import SustainableImg from "../../assets/SustainableImg.png"
import AirX from "../../assets/AirXimg.png"
import Img from "../../assets/img1.png"
import Img2 from "../../assets/img2.png"
import Img3 from "../../assets/img3.png"
import Img4 from "../../assets/img4.png"
import ImageRightLarge from "../../assets/imgRightLarge.png"
function PreviewFeture() {
  return (
    <div className='bg-[#1A1A1A] flex justify-center items-center text-[#FFFFFB] flex-col'>
       <div className=" w-[90%] flex  flex-col gap-8 my-10">
          <div className="flex justify-between items-center flex-wrap w-full">
              <div className="flex flex-col  items-center  justify-center gap-3 w-[26%]">
                <img src={DesignFirst} alt="first design image"  className="w-full h-[286px]"/>
                <p className="text-2xl font-light">Impeccable Design</p>
              </div>
              <div className="flex flex-col  items-center justify-cente gap-3 w-[26%]">
                <img src={PerformanceFirst} alt="performance image" className="w-[328px] h-[286px]" />
                <p className="text-2xl font-light">Elevated Performance</p>
              </div>
              <div className="flex flex-col  items-center justify-center gap-3 w-[26%]">
                 <img src={Interiors} alt="Interiors image" className="w-[328px] h-[286px]" />
                 <p className="text-2xl font-light">Great interiors</p>
              </div>
           </div>
           <div className="flex justify-between flex-wrap gap-10">
            <img src={SustainableImg} alt="sustainable Image" className="w-[472px] h-[472px]" />
             <div className="flex flex-col">
                <img src={AirX} alt="" className="w-[558.75px] h-[269.25px]" />
                <h3 className="my-4 text-[1.688rem] font-light">Drive to a sustainable future</h3>
                <p className="text-lg font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                <p className="mt-0 text-lg font-light"> sed do eiusmod tempor incididunt ut</p>
             </div>
           </div>
       </div>
       <div className="w-[90%] flex justify-between flex-wrap gap-10 my-10">
         <div className="flex justify-between flex-col  gap-5">
            <div className="flex gap-10">
                <img src={Img} alt="first image" className="w-[257px] h[257px]" />
                <img src={Img2} alt=" second image" />
            </div> 
            <div className="flex gap-10">
                <img src={Img3} alt="first image" className="w-[257px] h[257px]" />
                <img src={Img4} alt=" second image" />
            </div>
         </div>
         <img src={ImageRightLarge} alt="" className="w-[443px]"/>
       </div>
    </div>
  )
}

export default PreviewFeture