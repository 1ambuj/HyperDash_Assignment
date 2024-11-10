import Logo from "../assets/PrimaryLogo.svg"
import { FaBars } from "react-icons/fa";
import { Hero } from "./Pages/Hero";
const Home = () => {
  return (
  <div className="h-[100vh] flex flex-col ">
     <nav className="flex justify-between bg-[#1A1A1A] w-full items-center px-10 py-4">
      <div className="flex justify-center gap-8 list-none text-[#FFFFFB]">
        <li>Air X</li>
        <li>Lexo Z</li>
        <li>Gravity 9</li>
      </div>
      <div><img src={Logo} alt="Logo" /></div>
       <div className="flex justify-center gap-8 list-none text-[#FFFFFB]">
        <li>Air X</li>
        <li>Lexo Z</li>
        <FaBars />
       </div>
     </nav>
     <Hero />
  </div>
  )
}

export default Home