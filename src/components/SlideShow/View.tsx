import { useEffect, useState } from "react";
import "./styles.scss";

interface SlideshowProps {
  images: string[];
}

function Slideshow({ images }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="cointenerSlide">
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        style={{ height: "300px ", width: "500px" }}
      />
      <div onClick={handlePrevious} className="beforBtn">
        N
      </div>
      <div onClick={handleNext} className="afterBtn">
        P
      </div>
    </div>
  );
}

export default Slideshow;
