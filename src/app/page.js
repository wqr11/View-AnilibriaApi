import ImageCarousel from "@/components/ImageCarousel";
import { unbounded } from "@/util/fonts";

const HomePage = () => {
  return (
    <div className={`${unbounded.className}`}>
      <ImageCarousel />
    </div>
  );
};

export default HomePage;
