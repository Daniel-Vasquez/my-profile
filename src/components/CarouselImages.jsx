import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function CarouselImages({ ProjectsData }) {
  return (
    <Carousel interval="2000" autoPlay infiniteLoop width="80%">
      {ProjectsData.images.map((image) => (
        <div className="demoCarousel" key={image.id}>
          <img className="demoCarousel-img" src={image.src} alt="" />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselImages;
