import Navbar from "./Navbar";
import EmblaCarousel from "./Carousel";
import sushiImage from "/sushi.png";
import izakayaImage from "/izakaya.png";
import ramenImage from "/ramen.png";
import familyImage from "/family.png";
import shabushabuImage from "/shabushabu.png";

export default function HomePage() {
  const OPTIONS = {
    align: "start",
    loop: true,
  };
  const SLIDE_COUNT = 5;
  const SLIDES = [
    {
      id: 1,
      title: "Sushi",
      description: "This is the first slide",
      image: sushiImage,
      link: "/sushi",
    },
    {
      id: 2,
      title: "Izakaya",
      description: "This is the second slide",
      image: izakayaImage,
      link: "/izakaya",
    },
    {
      id: 3,
      title: "Ramen",
      description: "This is the third slide",
      image: ramenImage,
      link: "/ramen",
    },
    {
      id: 4,
      title: "Family Restaurant",
      description: "This is the fourth slide",
      image: familyImage,
      link: "/family",
    },
    {
      id: 5,
      title: "Shabu Shabu",
      description: "This is the fifth slide",
      image: shabushabuImage,
      link: "/shabushabu",
    },
  ];
  return (
    <div>
      <Navbar />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
