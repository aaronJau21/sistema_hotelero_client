import Destinations from "./components/destinations/Destinations";
import EventRooms from "./components/event-rooms/EventRooms";
import FeaturedDestinations from "./components/featured-destinations/FeaturedDestinations";
import Hero from "./components/hero/Hero";
import LearnMore from "./components/learn-more/LearnMore";
import LoyaltyProgram from "./components/loyalty-program/LoyaltyProgram";
import RouteOfFlavors from "./components/route-of-flavors/RouteOfFlavors";
import SpecialOffers from "./components/special-offers/SpecialOffers";

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <SpecialOffers />
      <FeaturedDestinations />
      <Destinations />
      <LoyaltyProgram />
      <RouteOfFlavors />
      <EventRooms />
      <LearnMore />
    </div>
  );
};

export default Home;
