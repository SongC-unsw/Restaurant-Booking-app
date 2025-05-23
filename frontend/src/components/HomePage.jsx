import Navbar from "./Navbar";
import EmblaCarousel from "./Carousel";
import sushiImage from "/sushi.png";
import izakayaImage from "/izakaya.png";
import ramenImage from "/ramen.png";
import familyImage from "/family.png";
import shabushabuImage from "/shabushabu.png";
import SearchBar from "./SearchBar";
import { Separator } from "./ui/separator";
import Footer from "./Footer";
export default function HomePage() {
  const OPTIONS = {
    align: "start",
    loop: true,
  };
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
  const RESTAURANTS = [
    {
      id: 1,
      name: "Sushi Name",
      image: sushiImage,
      description:
        "This is a description of the restaurant. It can be a few sentences",
    },
    {
      id: 2,
      name: "Family Name",
      image: familyImage,
      description:
        "This is a description of the restaurant. It can be a few sentences",
    },
    {
      id: 3,
      name: "Izakaya Name",
      image: izakayaImage,
      description:
        "This is a description of the restaurant. It can be a few sentences",
    },
  ];
  return (
    <div>
      <Navbar />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <SearchBar />
      <div className="recommendations container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold left-0">Recommendations</h1>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESTAURANTS.map((restaurant) => (
            <div className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-auto object-cover rounded-md"
              />
              <h2 className="text-lg font-bold">{restaurant.name}</h2>
              <p className="text-gray-600">{restaurant.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
