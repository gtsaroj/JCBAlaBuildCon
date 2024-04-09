import { ServiceCardContainer } from "../Component/Card/Card";
import Info from "../Component/CompanyInfo/Info";
import SpecialService from "../Component/SpecialService/SpecialService";
import Feature from "../Component/Feature/Feature";
import Review from "../Component/Review/Review";
import { Banner } from "../Component/Banner/Banner";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Banner />
      <ServiceCardContainer />
      <div className="w-full flex items-center justify-center">
        <Info />
      </div>
      <Feature />
      <SpecialService />
      <Review />
    </div>
  );
};

export default Home;
