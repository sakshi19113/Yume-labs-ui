import ArtOfPossible from "@components/ArtOfPossibleHead";
import CustomerLove from "@components/CustomerLove";
import ExplorePortfolio from "@components/ExplorePortfolio";
import Grid from "@components/Grid";
import HeroImageContainer from "@components/HeroImageContainer";
import HomepageHeading from "@components/HomepageHeading";
import InnovationContainer from "@components/InnovationContainer";
import OurServiceSection from "@components/OurServicesSection";
import OurWork from "@components/OurWork";
import OurWorkHead from "@components/OurWorkHead";

const Home = () => {
  return (
    <>
      <HomepageHeading />
      <HeroImageContainer />
      <InnovationContainer />
      <OurWorkHead />
      <OurWork />
      <ExplorePortfolio
        mobileText="EXPLORE PORTFOLIO"
        desktopText="EXPLORE PORTFOLIO"
      />
      <OurServiceSection />
      <Grid />
      <CustomerLove />
      <ArtOfPossible />
    </>
  );
};

export default Home;
