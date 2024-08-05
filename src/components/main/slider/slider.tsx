import { useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      title: "Wir kümmern uns um Ihre schöner Garten und Haus",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      buttonText: "Lern mehr",
      image: "/public/fwfqq-1@2x.png",
    },
    {
      title: "Wir kümmern uns um Ihre schöner Garten und Haus",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      buttonText: "Lern mehr",
      // image: "/public/fwfqq-1@2x.png",
    },
    // Add more slides here if needed
  ];
  const totalSlides = slides.length;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className="w-full h-[600px] bg-gradient-to-r from-emerald-100 to-red-50">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-w-full p-24"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "600px",
                transformOrigin: "center",
              }}
            >
              <h2 className="text-neutral-600 text-[55px] font-['Baloo'] font-medium leading-[70.90px] mt-24 w-8/12 md:w-6/12 break-words">
                {slide.title}
              </h2>
              <p className="w-[450px] mb-4 text-gray-700">
                {slide.description}
              </p>
              <button className="inline-block px-8 py-2 text-[#505F4E] transition duration-300 border-2 border-[#505F4E] rounded-none hover:bg-[#505F4E] hover:text-white">
                {slide.buttonText}
              </button>
              {/* <img src={slide.image} alt={slide.title} className="w-full h-[400px]" /> */}
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-0 p-2 transform -translate-y-1/2 border-none outline-none top-1/2"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-gray-900"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 p-2 text-white transform -translate-y-1/2 border-none rounded-full outline-none top-1/2"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-gray-900"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
