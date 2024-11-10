import AirXAd from "./Fetures/AirXAd";
import FetureAirX from "./Fetures/FetureAirX";
import FetureLexoZ from "./Fetures/FetureLexoZ";
import FetureNumerical from "./Fetures/FetureNumerical";
import NewFeatureAirX from "./Fetures/NewFeatureAirX";
import SpecificationAirX from "./Fetures/SpecificationAirX";
import Home from "./Home";
import Footer from "./Pages/Footer";
import PreviewFeture from "./Pages/PreviewFeture";
import Stories from "./Pages/Stories";


export default function Pages(){
    return (
       <>
         <Home />
         <FetureAirX />
         <FetureLexoZ />
         <NewFeatureAirX />
         <SpecificationAirX />
         <FetureNumerical />
         <PreviewFeture />
         <AirXAd />
         <Stories />
         <Footer />
       </>
    )
}