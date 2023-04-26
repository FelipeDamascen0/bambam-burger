import { Footer } from "../../components/Footer";
import { Information } from "../../components/Information";
import { MakeOrder } from "../../components/MakeOrder";
import { Menu } from "../../components/Menu";
import { Offers } from "../../components/Offers";
import { OpeningHours } from "../../components/OpeningHours";
import { FeedBackClients } from "../../components/OurClients";
import { Social } from "../../components/Social";


export const Home = () => {
  return(
    <div className="h-screen w-full">
      <Menu />
      <Information />
      <Social />
      <Offers />
      <div className="flex justify-center items-center border-b-2">
        <OpeningHours />
      </div>
      <hr />
      <FeedBackClients />
      <MakeOrder /> 
      <Footer />
    </div>
  );
}

