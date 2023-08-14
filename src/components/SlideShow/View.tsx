import { useState, useEffect } from "react";
import "./styles.scss";

interface SlideshowProps {
  images: string[];
}

function Slideshow({ images }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2800);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="containerSlide">
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        style={{ height: "300px", width: "500px" }}
        className="image"
      />
    </div>
  );
}

export default Slideshow;
