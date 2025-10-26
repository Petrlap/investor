import styles from "./Home.module.css";
import InvestorBenifits from "../../components/InvestorBenifits/InvestorBenifits";
import VideoBlock from "../../components/VideoBlock/VideoBlock";
import Products from "../../components/Products/Products";
import Description from "../../components/Description/Description";
import Notes from "../../components/Notes/Notes";
import BusinessBlock from "../../components/BusinessBlock/BusinessBlock";
import TimeLine from "../../components/TimeLine/TimeLine";

const Home = () => {
  return (
    <div>
      <VideoBlock />
      <InvestorBenifits />
      <Products />
      <Description />
      <Notes />
      <TimeLine />
      <BusinessBlock />
    </div>
  );
};

export { Home };
