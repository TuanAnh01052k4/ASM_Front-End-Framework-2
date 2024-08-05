import Sellers from "../best-seller/best-sellers";
import PostImage from "../post-image/post-image";
import Kategorien from "../Kategorien/kategorien";
import Slider from "../slider/slider";

const Home = () => {
  return (
    <div className="bg-[#F8F4F0] w-full">
      <Slider />
      <Sellers />
      <PostImage />
      <Kategorien />
    </div>
  );
};

export default Home;
