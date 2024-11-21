import Card from "./PricingCard/Card";
import HeroSection from "./HeroSection";
// import ReviewSection from "./ReviewSection/ReviewSection";
import ServiceTestimonial from "./ServiceTestimonial/ServiceTestimonial";
import FeatureSection from "./FeatureSection/FeatureSection";
import TrustedBanner from "./TrustedBanner/TrustedBanner";
import TimeLine from "./TimeLine/TimeLine";
// import Description from "./Description/Description";

const Home = () => {
  return (
    <div className="font-serif bg-white">
      <HeroSection></HeroSection>
      <Card></Card>
      <ServiceTestimonial></ServiceTestimonial>
      <TimeLine></TimeLine>
      <FeatureSection></FeatureSection>
      <TrustedBanner></TrustedBanner>
      {/* <Description></Description> */}
      {/* <ReviewSection></ReviewSection> */}
    </div>
  );
};

export default Home;
