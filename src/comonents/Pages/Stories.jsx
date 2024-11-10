import StoryFirst from "../../assets/Story1Img.png"
import StorySecond from "../../assets/Story2Img.png"
import StoryThird from "../../assets/Story3Img.png"
import StoryFourth from "../../assets/Story4Img.png"
import { GoArrowLeft } from "react-icons/go";
import {GoArrowRight} from "react-icons/go";

const Stories = () => {
  return (
    <div className="bg-[#1A1A1A] pl-20 text-[#FFFB] py-10">
        <div className="flex justify-between items-center mr-10">
            <h3 className="text-4xl">Our Stories</h3>
            <div className="flex gap-2">
            < GoArrowLeft className="text-[#FFFFFB] text-3xl" />
            <GoArrowRight className="text-[#FFFFFB] text-3xl" />
            </div>
        </div>
        <div className="flex items-center justify-between gap-10 overflow-x-hidden max-w-[calc(100% + 159px)] my-4"> 
    <div className="flex flex-col">
    <img src={StoryFirst} alt="" className="w-[318px] h-[380px]" />
    <div>
      <h3 className="text-lg my-3">Lorem Ipsum</h3>
      <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
      </div>
      <div className="flex flex-col">
        <img src={StorySecond} alt="" className="w-[318px] h-[380px]" />
        <div>
          <h3 className="text-lg my-3">Lorem Ipsum</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="flex flex-col">
        <img src={StoryThird} alt="" className="w-[318px] h-[380px]" />
        <div>
          <h3 className="text-lg my-3">Lorem Ipsum</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="flex flex-col mr-[-159px]"> 
        <img src={StoryFourth} alt="" className="w-[318px] h-[380px]" />
        <div>
          <h3 className="text-lg my-3">Lorem Ipsum</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>      
    </div>
  )
}

export default Stories