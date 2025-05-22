import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import { useNavigate } from "react-router-dom";
const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const navigate = useNavigate();
  return (
    <section className="embla w-full md:w-[90%] lg:w-[1000px] mx-auto px-4 md:px-10">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div
              className="embla__slide my-10 bg-white overflow-hidden cursor-pointer"
              key={slide.id}
              onClick={() => {
                navigate(slide.link);
              }}
            >
              <div className="relative w-full" style={{ paddingBottom: "45%" }}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                />
                <h1 className="absolute bottom-0 left-0 text-white p-4 text-3xl font-bold shadow-lg bg-black/50 rounded-md">
                  {slide.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
