import {GoArrowRight} from "react-icons/go";
const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] text-[#FFFFFB] py-10 px-20">
       <div className="w-[420px] border-b border-[#FFFFFB]">
       <h1 className="text-3xl mb-10">Subscribe to our newsletter</h1>
      <div className="flex gap-20 ">
        <p className="font-extralight mb-10">enter your email</p>
        <GoArrowRight className="text-3xl mt-1 font-light"/>
      </div>
       </div>
       <div className="flex justify-between my-20">
         <div className="flex gap-5">
         <div className="flex gap-5 flex-col">
            <p className="text-[1.313rem]">Air X</p>
            <p className="text-[1.313rem]">Lexo Z</p>
            <p className="text-[1.313rem]">Gravity 9</p>
          </div>
          <div  className="flex gap-5 flex-col">
            <p className="text-[1.313rem]">Fleet</p>
            <p className="text-[1.313rem]">Comany</p>
            <p className="text-[1.313rem]">Stories</p>
          </div>
         </div>
         <div className="flex gap-5">
         <div className="flex gap-5 flex-col">
            <p className="text-[0.781rem] font-light">Purchasing</p>
            <p className="text-[0.781rem] font-light">Charging</p>
            <p className="text-[0.781rem] font-light">Insurance</p>
            <p className="text-[0.781rem] font-light">Service</p>
          </div>
          <div className="flex gap-5 flex-col">
            <p className="text-[0.781rem] font-light">spaces</p>
            <p className="text-[0.781rem] font-light">Inverstors</p>
            <p className="text-[0.781rem] font-light">Career</p>
            <p className="text-[0.781rem] font-light">Contact Us</p>
          </div>
         </div>
       </div>
    </div>
  )
}

export default Footer